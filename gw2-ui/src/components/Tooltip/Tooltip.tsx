import { offset, flip, shift } from '@floating-ui/core';
import { useFloating, type ClientRectObject } from '@floating-ui/react-dom';

import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useMemo,
  cloneElement,
} from 'react';
import { createPortal } from 'react-dom';
import TooltipContainer, {
  TooltipContainerProps,
} from '../TooltipContainer/TooltipContainer';
import css from './Tooltip.module.css';

export type TooltipProps = {
  content?: ReactNode;
  render?: ReactNode | (() => ReactNode);
  containerProps?: Partial<Omit<TooltipContainerProps, 'children'>>;
  disabled?: boolean;
  // You must pass exactly one element as children, and it must accept (or forward) a ref.
  children: ReactElement;
};

const FLOATING_MIDDLEWARE = [offset(5), flip(), shift()];
function rect(x: number, y: number): ClientRectObject {
  return {
    width: 0,
    height: 0,
    x: x,
    y: y,
    top: y,
    left: x,
    right: x,
    bottom: y,
  };
}
const NULL_RECT = rect(0, 0);

// useLayoutEffect does not exist in some SSR solutions
const useLayoutEffectSafe =
  typeof document !== 'undefined' ? useLayoutEffect : useEffect;

const Tooltip = ({
  children,
  content: propsContent,
  render,
  containerProps,
  disabled,
}: TooltipProps): ReactElement => {
  const {
    // position of the tooltip
    x,
    y,
    strategy,
    // update manually
    update,
    // Set the reference to the hovered element and update
    reference,
    // Set the reference to the tooltip and update
    floating,
  } = useFloating({
    middleware: FLOATING_MIDDLEWARE,
  });

  const children_ref = useRef<HTMLElement>(null);
  const position_ref = useRef<ClientRectObject>(NULL_RECT);
  const [_visible, setVisible] = useState<boolean>(false);
  const [_fixed, setFixed] = useState<boolean>(false);
  const visible = (!disabled && _visible) || _fixed;

  // We need to finagle a ref into the child component.
  const children_with_ref = useMemo(() => {
    return cloneElement(children, {
      ref: children_ref,
    });
  }, [children]);

  // Render the tooltip content if visible
  const content = useMemo((): ReactNode => {
    if (!visible) {
      return null;
    }

    if (propsContent) {
      return (
        <TooltipContainer {...containerProps}>{propsContent}</TooltipContainer>
      );
    } else if (typeof render === 'function') {
      return render();
    } else if (render !== null) {
      return render;
    }
    return null;
  }, [visible, propsContent, render]);

  // Add pointer event handlers to the children to track the tooltip's position
  useLayoutEffectSafe(() => {
    const current = children_ref.current;
    if (!current) return;

    function setPosition(e: Event) {
      if (e instanceof PointerEvent) {
        position_ref.current = rect(e.clientX, e.clientY);
      } else if (e instanceof TouchEvent) {
        position_ref.current = rect(e.touches[0].clientX, e.touches[0].clientY);
      }
      update();
    }

    function ontouchstart(e: TouchEvent) {
      if (current instanceof Element) {
        ontouchstartInner(e, current);
      }
    }

    function ontouchstartInner(e: TouchEvent, current: Element) {
      if (e.target instanceof Node && current.contains(e.target)) {
        setFixed(true);
        setPosition(e);
        return;
      } else {
        setFixed(false);
        position_ref.current = NULL_RECT;
        return;
      }
    }

    function onpointerover(e: PointerEvent) {
      setVisible(true);
      setPosition(e);
    }

    function onpointerout() {
      setVisible(false);
      position_ref.current = NULL_RECT;
    }

    function onpointermove(e: PointerEvent) {
      setPosition(e);
    }

    document.addEventListener('touchstart', ontouchstart);
    current.addEventListener('pointerover', onpointerover);
    current.addEventListener('pointerout', onpointerout);
    current.addEventListener('pointermove', onpointermove);
    return () => {
      document.removeEventListener('touchstart', ontouchstart);
      current.removeEventListener('pointerover', onpointerover);
      current.removeEventListener('pointerout', onpointerout);
      current.removeEventListener('pointermove', onpointermove);
    };
  }, [children_with_ref, update]);

  // Create and register a virtual element for floating-ui
  useLayoutEffectSafe(() => {
    if (!visible) {
      reference(null);
      return;
    }
    const virtualElement = {
      getBoundingClientRect: () => position_ref.current,
    };
    reference(virtualElement);
  }, [visible]);

  return (
    <>
      {children_with_ref}
      {visible
        ? createPortal(
            <div
              className={css.root}
              ref={floating}
              style={{
                position: strategy,
                top: y ?? '',
                left: x ?? '',
              }}
            >
              {content}
            </div>,
            (children_ref.current?.ownerDocument || document).body,
          )
        : null}
    </>
  );
};

export default Tooltip;
