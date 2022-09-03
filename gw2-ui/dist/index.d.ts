import * as React from 'react';
import React__default, { ReactElement, CSSProperties, MouseEventHandler, PropsWithChildren, ReactNode } from 'react';

declare type APILanguage = 'de' | 'en' | 'es' | 'fr' | 'zh';
declare const APILanguageProvider: React.Provider<APILanguage>;

declare type AttributeTypes = 'Power' | 'Precision' | 'Toughness' | 'Vitality' | 'Concentration' | 'Condition Damage' | 'Expertise' | 'Ferocity' | 'Healing Power' | 'Armor' | 'Boon Duration' | 'Critical Chance' | 'Critical Damage' | 'Condition Duration' | 'Health' | 'Agony Resistance' | 'Gold Find' | 'Karma Gain' | 'Magic Find' | 'XP Gain';

interface AttributeProps {
    name: AttributeTypes;
    text?: string;
    disableTooltip?: boolean;
    disableIcon?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    inline?: boolean;
    style?: CSSProperties;
    className?: string;
}
declare const Attribute: ({ name, text, disableTooltip, disableIcon, disableText, disableLink, inline, style, className, }: AttributeProps) => ReactElement;

declare type AugmentationsTypes = 'Mist Attunement 1' | 'Mist Attunement 2' | 'Mist Attunement 3' | 'Mist Attunement 4';

interface AugmentationProps {
    name: AugmentationsTypes;
    disableTooltip?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    disableIcon?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const Augmentation: (props: AugmentationProps) => ReactElement;

declare type AuraTypes = 'Chaos' | 'Dark' | 'Fire' | 'Frost' | 'Light' | 'Magnetic' | 'Shocking';

interface AuraProps {
    name: AuraTypes;
    disableTooltip?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    disableIcon?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const Aura: (props: AuraProps) => ReactElement;

declare type BoonsTypes = 'Aegis' | 'Alacrity' | 'Fury' | 'Might' | 'Protection' | 'Quickness' | 'Regeneration' | 'Resistance' | 'Resolution' | 'Stability' | 'Swiftness' | 'Vigor';

interface BoonProps {
    name: BoonsTypes;
    count?: number;
    disableTooltip?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    disableIcon?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const Boon: (props: BoonProps) => ReactElement;

interface CoinProps {
    value: number;
    className?: string;
    style?: CSSProperties;
}
declare const Coin: ({ value, className, style }: CoinProps) => ReactElement;

declare type CommonEffectTypes = 'Agony' | 'Barrier' | 'Blight' | 'Exposed' | 'Invulnerability' | 'Revealed' | 'Rigorous Certainty' | 'Stealth' | 'Stun Break' | 'Superspeed' | 'Unblockable';

interface CommonEffectProps {
    name: CommonEffectTypes | 'Mistlock Singularity';
    disableTooltip?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    disableIcon?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const CommonEffect: ({ name: propsName, disableTooltip, disableText, disableLink, disableIcon, className, style, }: CommonEffectProps) => ReactElement;

declare type ConditionTypes = 'Bleeding' | 'Blinded' | 'Burning' | 'Chilled' | 'Confusion' | 'Crippled' | 'Fear' | 'Immobile' | 'Poisoned' | 'Slow' | 'Taunt' | 'Torment' | 'Vulnerability' | 'Weakness';

interface ConditionProps {
    name: ConditionTypes;
    count?: number;
    disableTooltip?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    disableIcon?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const Condition: ({ name, count, disableTooltip, disableText, disableLink, disableIcon, className, style, }: ConditionProps) => ReactElement;

declare type ConsumableEffectTypes = 'Enhancement' | 'Nourishment';

interface ConsumableEffectProps {
    name: ConsumableEffectTypes;
    text?: string;
    disableTooltip?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    disableIcon?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const ConsumableEffect: ({ name, text, disableTooltip, disableText, disableLink, disableIcon, className, style, }: ConsumableEffectProps) => ReactElement;

declare type ControlEffectTypes = 'Daze' | 'Float' | 'Knockback' | 'Knockdown' | 'Launch' | 'Pull' | 'Sink' | 'Stun';

interface ControlEffectProps {
    name: ControlEffectTypes;
    disableTooltip?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    disableIcon?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const ControlEffect: ({ name, disableTooltip, disableText, disableLink, disableIcon, className, style, }: ControlEffectProps) => ReactElement;

declare type GW2ApiAttribute = 'AgonyResistance' | 'BoonDuration' | 'ConditionDamage' | 'ConditionDuration' | 'CritDamage' | 'Healing' | 'Power' | 'Precision' | 'Toughness' | 'Vitality';

declare type ValueOf<T> = T[keyof T];

declare type ItemArmorWeight = ValueOf<ItemArmorWeights>;
interface ItemArmorWeights {
    HEAVY: string;
    MEDIUM: string;
    LIGHT: string;
}

declare type ItemTypeName = ValueOf<ItemTypeNames>;
interface ItemTypeNames {
    HELM: string;
    SHOULDERS: string;
    COAT: string;
    GLOVES: string;
    LEGGINGS: string;
    BOOTS: string;
    ACCESSORY: string;
    AMULET: string;
    RING: string;
    BACK_ITEM: string;
    GREATSWORD: string;
    HAMMER: string;
    LONGBOW: string;
    RIFLE: string;
    SHORT_BOW: string;
    STAFF: string;
    AXE: string;
    DAGGER: string;
    MACE: string;
    PISTOL: string;
    SWORD: string;
    SCEPTER: string;
    FOCUS: string;
    SHIELD: string;
    TORCH: string;
    WARHORN: string;
    HARPOON: string;
    SPEARGUN: string;
    TRIDENT: string;
}

declare type ItemRarity = ValueOf<ItemRarities>;
interface ItemRarities {
    LEGENDARY: string;
    ASCENDED: string;
    EXOTIC: string;
    RARE: string;
    MASTERWORK: string;
    FINE: string;
    BASIC: string;
}

declare type ItemStatName = ValueOf<ItemStatNames>;
interface ItemStatNames {
    BERSERKER: string;
    ZEALOT: string;
    SOLDIER: string;
    FORSAKEN: string;
    VALKYRIE: string;
    HARRIER: string;
    PALADIN: string;
    COMMANDER: string;
    DEMOLISHER: string;
    SWASHBUCKLER: string;
    MARAUDER: string;
    AVATAR: string;
    SEEKER: string;
    DESTROYER: string;
    VIGILANT: string;
    CRUSADER: string;
    WANDERER: string;
    DIVINER: string;
    WIZARD: string;
    VIPER: string;
    GRIEVING: string;
    SAGE: string;
    MARSHAL: string;
    MENDER: string;
    CAPTAIN: string;
    RAMPAGER: string;
    ASSASSIN: string;
    DEADSHOT: string;
    SERAPH: string;
    KNIGHT: string;
    CAVALIER: string;
    NOMAD: string;
    SETTLER: string;
    GIVER: string;
    TRAILBLAZER: string;
    MINSTREL: string;
    BARBARIAN: string;
    SENTINEL: string;
    SHAMAN: string;
    SINISTER: string;
    CARRION: string;
    RABID: string;
    DIRE: string;
    APOSTATE: string;
    PLAGUEDOCTOR: string;
    BRINGER: string;
    CLERIC: string;
    MAGI: string;
    APOTHECARY: string;
    CELESTIAL: string;
    DRAGON: string;
    RITUALIST: string;
}

interface GW2ApiInfixUpgradeAttribute {
    attribute: GW2ApiAttribute;
    modifier: number;
}
interface GW2ApiBuff {
    skill_id: number;
    description?: string;
}
interface GW2ApiInfixUpgrade {
    id?: number;
    attributes: GW2ApiInfixUpgradeAttribute[];
    buff?: GW2ApiBuff;
}

interface CreateItemProps {
    rarity?: ItemRarity;
    level?: number;
    type: ItemTypeName;
    stat: ItemStatName;
    weight?: ItemArmorWeight;
    nameSuffix?: string;
    name?: string;
}

interface ItemProps$1 extends CreateItemProps {
    count?: number;
    text?: string;
    disableIcon?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    disableTooltip?: boolean;
    inline?: boolean;
    upgrades?: (number | [number, number])[];
    style?: CSSProperties;
    className?: string;
}
declare const Item$1: (props: ItemProps$1) => ReactElement;

interface IconProps {
    name?: 'Empty' | 'Lock' | 'Reset' | 'WeaponSwap';
    loading?: boolean;
    disableIcon?: boolean;
    spinnerProps?: any;
    src?: string;
    zoom?: number;
    inline?: boolean;
    gutterRight?: boolean;
    gutterLeft?: boolean;
    hexagon?: boolean;
    applyCount?: number;
    inactive?: boolean;
    applyCountProps?: any;
    className?: string;
    iconViaClassname?: boolean;
    onClick?: MouseEventHandler<HTMLSpanElement>;
}
declare const Icon: ({ name, loading, spinnerProps, src, zoom, inline, gutterRight, gutterLeft, hexagon, applyCount, inactive, applyCountProps, className, onClick, }: IconProps) => ReactElement;

interface ProgressProps {
    inline?: boolean;
}
declare const Progress: ({ inline }: ProgressProps) => ReactElement;

interface IconWithTextProps {
    icon?: string;
    text?: string | JSX.Element;
    disableIcon?: boolean;
    disableText?: boolean;
    inline?: boolean;
    iconProps?: IconProps;
    textProps?: any;
    progressProps?: ProgressProps;
    loading?: boolean;
    style?: CSSProperties;
    className?: string;
    onClick?: MouseEventHandler<HTMLSpanElement>;
}
declare const IconWithText: React__default.ForwardRefExoticComponent<IconWithTextProps & React__default.RefAttributes<HTMLInputElement>>;

declare type TooltipContainerProps = PropsWithChildren<{
    className?: string;
}>;
declare const TooltipContainer: ({ children, className, }: TooltipContainerProps) => ReactElement;

declare type TooltipProps = {
    content?: ReactNode;
    render?: ReactNode | (() => ReactNode);
    containerProps?: Partial<Omit<TooltipContainerProps, 'children'>>;
    disabled?: boolean;
    children: ReactElement;
};
declare const Tooltip: ({ children, content: propsContent, render, containerProps, disabled, }: TooltipProps) => ReactElement;

declare const languages: readonly ["en", "zh", "cs", "nl", "fi", "fr", "de", "hu", "it", "ja", "ko", "ms", "po", "pt", "ru", "es", "sv", "tr", "un"];
declare type languagesAvailable = typeof languages[number];
interface WikiLinkProps {
    component?: any;
    to: string;
    text?: string;
    lang?: languagesAvailable;
    style?: CSSProperties;
    className?: string;
}
declare const WikiLink: ({ component: Component, to, text, lang, style, className, }: WikiLinkProps) => ReactElement;

/**
 * Allows supplying custom data in the data props
 */
interface CustomComponentProps extends Omit<IconWithTextProps, 'icon' | 'text' | 'loading'> {
    type: 'Skill' | 'Trait';
    data: unknown;
    text?: string;
    disableLink?: boolean;
    disableTooltip?: boolean;
    tooltipProps?: TooltipProps;
    wikiLinkProps?: WikiLinkProps;
}
declare const CustomComponent: (props: CustomComponentProps) => ReactElement;

interface DetailsHeaderFlagProps {
    icon: string;
    value: number | any;
}
interface DetailsHeaderProps {
    icon?: string;
    iconProps?: IconProps;
    titleClassName?: string;
    flags?: DetailsHeaderFlagProps[];
    className?: string;
}
declare const DetailsHeader: ({ icon, iconProps, titleClassName, flags, children, className, }: PropsWithChildren<DetailsHeaderProps>) => ReactElement;

declare type ErrorCode = number;
declare type ErrorString = string | ((id: number) => string);
declare type ErrorStrings = ErrorString | Record<ErrorCode, ErrorString | Partial<Record<APILanguage, ErrorString>>>;
interface ErrorProps {
    code: ErrorCode;
    id?: number;
    name: ErrorStrings;
    message: ErrorStrings;
    disableIcon?: boolean;
    disableText?: boolean;
    disableTooltip?: boolean;
    inline?: boolean;
    tooltipProps?: TooltipProps;
    className?: string;
    style?: CSSProperties;
}
declare const Error: ({ code, id, name: nameProps, message: messageProps, disableIcon, disableText, disableTooltip, inline, tooltipProps, className, style, }: ErrorProps) => ReactElement;

declare type ItemUpgrades = (number | [number, number])[];
interface ItemProps {
    id: number;
    text?: string | ((text: string) => string);
    count?: number;
    stat?: ItemStatName;
    disableIcon?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    disableTooltip?: boolean;
    inline?: boolean;
    tooltipProps?: TooltipProps;
    wikiLinkProps?: WikiLinkProps;
    upgrades?: ItemUpgrades;
    style?: CSSProperties;
    className?: string;
}
declare const Item: (props: ItemProps) => ReactElement;

declare type MistlockInstabilityTypes = 'Adrenaline Rush' | 'Afflicted' | 'Boon Overload' | 'Flux Bomb' | 'Fractal Vindicators' | 'Frailty' | 'Hamstrung' | 'Last Laugh' | 'Mists Convergence' | 'No Pain, No Gain' | 'Outflanked' | 'Social Awkwardness' | 'Stick Together' | 'Sugar Rush' | 'Toxic Trail' | 'Vengeance' | 'We Bleed Fire' | 'Toxic Sickness';

interface MistlockInstabilityProps {
    name: MistlockInstabilityTypes;
    disableTooltip?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    disableIcon?: boolean;
    className?: string;
    style?: CSSProperties;
}
declare const MistlockInstability: ({ name, disableTooltip, disableText, disableLink, disableIcon, className, style, }: MistlockInstabilityProps) => ReactElement;

declare type ProfessionTypes = 'Elementalist' | 'Engineer' | 'Guardian' | 'Mesmer' | 'Necromancer' | 'Ranger' | 'Revenant' | 'Thief' | 'Warrior';
declare type EliteSpecTypes = 'Berserker' | 'Bladesworn' | 'Catalyst' | 'Chronomancer' | 'Daredevil' | 'Deadeye' | 'Dragonhunter' | 'Druid' | 'Firebrand' | 'Harbinger' | 'Herald' | 'Holosmith' | 'Mechanist' | 'Mirage' | 'Reaper' | 'Renegade' | 'Scourge' | 'Scrapper' | 'Soulbeast' | 'Specter' | 'Spellbreaker' | 'Tempest' | 'Untamed' | 'Vindicator' | 'Virtuoso' | 'Weaver' | 'Willbender';

interface ProfessionProps {
    name: ProfessionTypes | EliteSpecTypes;
    text?: string;
    disableTooltip?: boolean;
    disableIcon?: boolean;
    disableLink?: boolean;
    disableText?: boolean;
    inline?: boolean;
    style?: CSSProperties;
    className?: string;
}
declare const Profession: ({ name: professionOrSpecName, text, disableTooltip, disableIcon, disableLink, disableText, inline, style, className, }: ProfessionProps) => ReactElement;

declare type RacesTypes = 'Asura' | 'Charr' | 'Human' | 'Norn' | 'Sylvari';

interface RaceProps {
    name: RacesTypes;
    text?: string;
    disableTooltip?: boolean;
    disableIcon?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    inline?: boolean;
    wikiLinkProps?: WikiLinkProps;
    errorProps?: ErrorProps;
    className?: string;
    style?: CSSProperties;
}
declare const Race: ({ name, text, disableTooltip, disableText, disableLink, disableIcon, inline, wikiLinkProps, errorProps, className, style, }: RaceProps) => ReactElement;

interface SkillProps extends Omit<IconWithTextProps, 'icon' | 'text' | 'loading' | 'style'> {
    id: number;
    text?: string;
    disableLink?: boolean;
    disableTooltip?: boolean;
    tooltipProps?: TooltipProps;
    wikiLinkProps?: WikiLinkProps;
    style?: CSSProperties;
    className?: string;
}
declare const Skill: (props: SkillProps) => ReactElement;

interface SpecializationProps {
    id: number;
    text?: string;
    disableIcon?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    inline?: boolean;
    style?: CSSProperties;
    className?: string;
}
declare const Specialization: (props: SpecializationProps) => ReactElement;

interface SpinnerProps {
    inline?: boolean;
    className?: string;
}
declare const Spinner: ({ inline, className }: SpinnerProps) => ReactElement;

interface TraitProps {
    id: number;
    text?: string;
    disableIcon?: boolean;
    disableText?: boolean;
    disableLink?: boolean;
    disableTooltip?: boolean;
    inline?: boolean;
    tooltipProps?: TooltipProps;
    wikiLinkProps?: WikiLinkProps;
    inactive?: boolean;
    style?: CSSProperties;
    className?: string;
    onClick?: MouseEventHandler<HTMLSpanElement>;
}
declare const Trait: (props: TraitProps) => ReactElement;

interface TraitLineProps {
    id: number;
    defaultSelected?: number[];
    selected?: number[];
    selectable?: boolean;
    resettable?: boolean;
    onReset?: () => void;
    onSelect?: (v: {
        tier: number;
        id: number;
        index: number;
    }) => void;
    style?: CSSProperties;
    className?: string;
}
declare const TraitLine: (props: TraitLineProps) => ReactElement;

declare const API_ERROR_NETWORK = 500;
declare const API_ERROR_NOT_FOUND = 404;
declare type APIError = typeof API_ERROR_NETWORK | typeof API_ERROR_NOT_FOUND;
declare type Id = number;
declare type APICacheGetOneResult<T> = {
    loading: true;
    error: false;
    data: null;
} | {
    loading: false;
    error: APIError;
    data: null;
} | {
    loading: false;
    error: false;
    data: T;
};
interface APICacheGetMultipleResult<T> {
    loading: boolean;
    errors: null | Record<Id, APIError>;
    data: Record<Id, T>;
}

declare type GW2ApiGameType = 'Activity' | 'Dungeon' | 'Pve' | 'Pvp' | 'PvpLobby' | 'Wvw';

declare type GW2ApiArmorSlotType = 'Boots' | 'Coat' | 'Gloves' | 'Helm' | 'HelmAquatic' | 'Leggings' | 'Shoulders';

declare type GW2ApiWeightClass = 'Heavy' | 'Medium' | 'Light' | 'Clothing';

declare type GW2ApiInfusionSlotFlag = 'Enrichment' | 'Infusion';

interface GW2ApiInflusionSlot {
    flags: GW2ApiInfusionSlotFlag[];
    item_id?: number;
}

interface GW2ApiArmorDetails {
    type: GW2ApiArmorSlotType;
    weight_class: GW2ApiWeightClass;
    defense: number;
    infusion_slots: GW2ApiInflusionSlot[];
    attribute_adjustment: number;
    infix_upgrade?: GW2ApiInfixUpgrade;
    suffix_item_id?: number;
    secondary_suffix_item_id: string;
    stat_choices?: number[];
}

interface GW2ApiBackItemDetails {
    infusion_slots: GW2ApiInflusionSlot[];
    attribute_adjustment: number;
    infix_upgrade?: GW2ApiInfixUpgrade;
    suffix_item_id?: number;
    secondary_suffix_item_id: string;
    stat_choices?: number[];
}

interface GW2ApiBagDetails {
    size: number;
    no_sell_or_sort: boolean;
}

declare type GW2ApiConsumableType = 'AppearanceChange' | 'Booze' | 'ContractNpc' | 'Currency' | 'Food' | 'Generic' | 'Halloween' | 'Immediate' | 'MountRandomUnlock' | 'RandomUnlock' | 'Transmutation' | 'Unlock' | 'UpgradeRemoval' | 'Utility' | 'TeleportToFriend';
declare type GW2ApiUnlockType = 'BagSlot' | 'BankTab' | 'Champion' | 'CollectibleCapacity' | 'Content' | 'CraftingRecipe' | 'Dye' | 'GliderSkin' | 'Minipet' | 'Ms' | 'Outfit' | 'RandomUnlock' | 'SharedSlot' | 'GearLoadoutTab' | 'BuildLibrarySlot' | 'BuildLoadoutTab';
interface GW2ApiConsumableDetails {
    type: GW2ApiConsumableType;
    description?: string;
    duration_ms?: number;
    unlock_type?: GW2ApiUnlockType;
    color_id?: number;
    recipe_id?: number;
    extra_recipe_ids?: number[];
    guild_upgrade_id?: number;
    apply_count?: number;
    name?: string;
    icon?: string;
    skins?: number[];
}

declare type GW2ApiContainerType = 'Default' | 'GiftBox' | 'Immediate' | 'OpenUI';

interface GW2ApiContainerDetails {
    type: GW2ApiContainerType;
}

interface GW2ApiGatheringToolDetails {
    type: 'Foraging' | 'Logging' | 'Mining' | 'Foo';
}

declare type GW2ApiGizmoType = 'Default' | 'ContainerKey' | 'RentableContractNpc' | 'UnlimitedConsumable';

interface GW2ApiGizmoDetails {
    type: GW2ApiGizmoType;
    guild_upgrade_id?: number;
    vendor_ids?: number[];
}

interface GW2ApiMiniatureDetails {
    minipet_id: number;
}

declare type GW2ApiSalvageKitType = 'Salvage';

interface GW2ApiSalvageKitDetails {
    type: GW2ApiSalvageKitType;
    charges: number;
}

declare type GW2ApiTrinketType = 'Accessory' | 'Amulet' | 'Ring';

interface GW2ApiTrinketDetails {
    type: GW2ApiTrinketType;
    infusion_slots: GW2ApiInflusionSlot[];
    attribute_adjustment: number;
    infix_upgrade?: GW2ApiInfixUpgrade;
    suffix_item_id?: number;
    secondary_suffix_item_id: string;
    stat_choices?: number[];
}

declare type GW2ApiDamageType = 'Fire' | 'Ice' | 'Lightning' | 'Physical' | 'Choking';

declare type GW2ApiOneHandedWeaponType = 'Axe' | 'Dagger' | 'Mace' | 'Pistol' | 'Scepter' | 'Sword' | 'Focus' | 'Shield' | 'Torch' | 'Warhorn';
declare type GW2ApiTwoHandedWeaponType = 'Greatsword' | 'Hammer' | 'Longbow' | 'Rifle' | 'Shortbow' | 'Staff';
declare type GW2ApiOtherWeaponType = 'LargeBundle' | 'SmallBundle' | 'Toy' | 'ToyTwoHanded';
declare type GW2ApiAquaticWeaponType = 'Speargun' | 'Trident' | 'Spear';
declare type GW2ApiWeaponType = GW2ApiOneHandedWeaponType | GW2ApiTwoHandedWeaponType | GW2ApiAquaticWeaponType | GW2ApiOtherWeaponType;

declare type GW2ApiWeaponTypeForItemDetails = GW2ApiOneHandedWeaponType | Exclude<GW2ApiTwoHandedWeaponType, 'Longbow' | 'Shortbow'> | 'LongBow' | 'ShortBow' | GW2ApiAquaticWeaponType | 'Harpoon' | GW2ApiOtherWeaponType;

interface GW2ApiWeaponDetails {
    type: GW2ApiWeaponTypeForItemDetails;
    damage_type: GW2ApiDamageType;
    min_power: number;
    max_power: number;
    defense: number;
    infusion_slots: GW2ApiInflusionSlot[];
    attribute_adjustment: number;
    infix_upgrade?: GW2ApiInfixUpgrade;
    suffix_item_id?: number;
    secondary_suffix_item_id: string;
    stat_choices?: number[];
}

declare type GW2ApiUpgradeComponentType = 'Default' | 'Gem' | 'Rune' | 'Sigil';

declare type GW2ApiArmorType = 'HeavyArmor' | 'MediumArmor' | 'LightArmor';

declare type GW2ApiInfusionUpgradeFlag = 'Enrichment' | 'Infusion' | 'Defense' | 'Offense' | 'Utility' | 'Agony';

declare type GW2APiUpgradeComponentFlag = Exclude<GW2ApiWeaponTypeForItemDetails, GW2ApiOtherWeaponType> | GW2ApiArmorType | 'Trinket';
interface GW2ApiUpgradeComponentDetails {
    type: GW2ApiUpgradeComponentType;
    flags: GW2APiUpgradeComponentFlag[];
    infusion_upgrade_flags: GW2ApiInfusionUpgradeFlag[];
    suffix: string;
    infix_upgrade: GW2ApiInfixUpgrade;
    bonuses?: string[];
    attribute_adjustment: number;
}

interface GW2ApiToolDetails {
    type: 'Salvage';
    charges: number;
}
declare type Keys = keyof GW2ApiArmorDetails | keyof GW2ApiBackItemDetails | keyof GW2ApiBagDetails | keyof GW2ApiConsumableDetails | keyof GW2ApiGatheringToolDetails | keyof GW2ApiGizmoDetails | keyof GW2ApiMiniatureDetails | keyof GW2ApiSalvageKitDetails | keyof GW2ApiToolDetails | keyof GW2ApiTrinketDetails | keyof GW2ApiWeaponDetails | keyof GW2ApiUpgradeComponentDetails;
declare type WrapInUndefined<T> = T & Partial<Record<Exclude<Keys, keyof T>, undefined>>;
declare type GW2ApiUpgradeMethod = 'Attunement' | 'Infusion';
declare type GW2ApiItemRarity = 'Junk' | 'Basic' | 'Fine' | 'Masterwork' | 'Rare' | 'Exotic' | 'Ascended' | 'Legendary';
declare type GW2ApiRestriction = RacesTypes | ProfessionTypes | 'Female';
declare type GW2ApiItemFlag = 'AccountBindOnUse' | 'AccountBound' | 'Attuned' | 'BulkConsume' | 'DeleteWarning' | 'HideSuffix' | 'Infused' | 'MonsterOnly' | 'NoMysticForge' | 'NoSalvage' | 'NoSell' | 'NotUpgradeable' | 'NoUnderwater' | 'Soulbound' | 'SoulbindOnAcquire' | 'SoulBindOnUse' | 'Tonic' | 'Unique';
interface GW2ApiUpgradedItem {
    upgrade: GW2ApiUpgradeMethod;
    item_id: number;
}
interface GW2ApiItemBase {
    id: number;
    chat_link: string;
    name: string;
    icon?: string;
    description?: string;
    rarity: GW2ApiItemRarity;
    level: number;
    vendor_value: number;
    default_skin?: number;
    game_types: GW2ApiGameType[];
    flags: GW2ApiItemFlag[];
    restrictions: GW2ApiRestriction[];
    upgrades_into?: GW2ApiUpgradedItem[];
    upgrades_from?: GW2ApiUpgradedItem[];
}
interface GW2ApiItemArmor extends GW2ApiItemBase {
    type: 'Armor';
    details: WrapInUndefined<GW2ApiArmorDetails>;
}
interface GW2ApiItemBack extends GW2ApiItemBase {
    type: 'Back';
    details: WrapInUndefined<GW2ApiBackItemDetails>;
}
interface GW2ApiItemBag extends GW2ApiItemBase {
    type: 'Bag';
    details: WrapInUndefined<GW2ApiBagDetails>;
}
interface GW2ApiItemConsumable extends GW2ApiItemBase {
    type: 'Consumable';
    details: WrapInUndefined<GW2ApiConsumableDetails>;
}
interface GW2ApiItemContainer extends GW2ApiItemBase {
    type: 'Container';
    details: WrapInUndefined<GW2ApiContainerDetails>;
}
interface GW2ApiItemCraftingMaterial extends GW2ApiItemBase {
    type: 'CraftingMaterial';
    details?: undefined;
}
interface GW2ApiItemGathering extends GW2ApiItemBase {
    type: 'Gathering';
    details: WrapInUndefined<GW2ApiGatheringToolDetails>;
}
interface GW2ApiItemGizmo extends GW2ApiItemBase {
    type: 'Gizmo';
    details: WrapInUndefined<GW2ApiGizmoDetails>;
}
interface GW2ApiItemKey extends GW2ApiItemBase {
    type: 'Key';
    details?: undefined;
}
interface GW2ApiItemMiniPet extends GW2ApiItemBase {
    type: 'MiniPet';
    details: WrapInUndefined<GW2ApiMiniatureDetails>;
}
interface GW2ApiItemTool extends GW2ApiItemBase {
    type: 'Tool';
    details: WrapInUndefined<GW2ApiToolDetails>;
}
interface GW2ApiItemTrinket extends GW2ApiItemBase {
    type: 'Trinket';
    details: WrapInUndefined<GW2ApiTrinketDetails>;
}
interface GW2ApiItemTrophy extends GW2ApiItemBase {
    type: 'Trophy';
    details?: undefined;
}
interface GW2ApiItemUpgradeComponent extends GW2ApiItemBase {
    type: 'UpgradeComponent';
    details: WrapInUndefined<GW2ApiUpgradeComponentDetails>;
}
interface GW2ApiItemWeapon extends GW2ApiItemBase {
    type: 'Weapon';
    details: WrapInUndefined<GW2ApiWeaponDetails>;
}
interface GW2ApiItemJadeBot extends GW2ApiItemBase {
    type: 'Quux' | 'Qux';
    details?: undefined;
}
declare type GW2ApiItem = GW2ApiItemArmor | GW2ApiItemBack | GW2ApiItemBag | GW2ApiItemConsumable | GW2ApiItemContainer | GW2ApiItemCraftingMaterial | GW2ApiItemGathering | GW2ApiItemGizmo | GW2ApiItemKey | GW2ApiItemMiniPet | GW2ApiItemTool | GW2ApiItemTrinket | GW2ApiItemTrophy | GW2ApiItemUpgradeComponent | GW2ApiItemWeapon | GW2ApiItemJadeBot;

declare type GW2ApiComboFieldType = 'Air' | 'Dark' | 'Fire' | 'Ice' | 'Light' | 'Lightning' | 'Poison' | 'Smoke' | 'Ethereal' | 'Water';

declare type Optional<T, S extends keyof T> = Omit<T, S> & Partial<Pick<T, S>>;
interface GW2ApiFactBase {
    text?: string;
    icon?: string;
}
interface GW2ApiFactAttributeAdjust extends GW2ApiFactBase {
    type: 'AttributeAdjust';
    value?: number;
    target: GW2ApiAttribute | 'None';
}
interface GW2ApiFactBuff extends GW2ApiFactBase {
    type: 'Buff';
    status?: string;
    description?: string;
    apply_count?: number;
    duration?: number;
}
interface GW2ApiFactBuffConversion extends GW2ApiFactBase {
    type: 'BuffConversion';
    percent: number;
    source: GW2ApiAttribute;
    target: GW2ApiAttribute;
}
interface GW2ApiFactComboField extends GW2ApiFactBase {
    type: 'ComboField';
    field_type: GW2ApiComboFieldType;
}
interface GW2ApiFactComboFinisher extends GW2ApiFactBase {
    type: 'ComboFinisher';
    percent: number;
    finisher_type: 'Blast' | 'Leap' | 'Projectile' | 'Whirl';
    chance?: number;
}
interface GW2ApiFactDamage extends GW2ApiFactBase {
    type: 'Damage';
    hit_count: number;
    dmg_multiplier: number;
}
interface GW2ApiFactDistance extends GW2ApiFactBase {
    type: 'Distance';
    distance: number;
}
interface GW2ApiFactDuration extends GW2ApiFactBase {
    type: 'Duration';
    duration: number;
}
interface GW2ApiFactHeal extends GW2ApiFactBase {
    type: 'Heal';
    hit_count: number;
}
interface GW2ApiFactHealingAdjust extends GW2ApiFactBase {
    type: 'HealingAdjust';
    hit_count: number;
}
interface GW2ApiFactNoData extends GW2ApiFactBase {
    type: 'NoData';
}
interface GW2ApiFactNumber extends GW2ApiFactBase {
    type: 'Number';
    value: number;
}
interface GW2ApiFactPercent extends GW2ApiFactBase {
    type: 'Percent';
    percent: number;
}
interface GW2ApiFactPrefixedBuff extends Optional<Omit<GW2ApiFactBuff, 'type'>, 'status'> {
    type: 'PrefixedBuff';
    prefix: Partial<Omit<GW2ApiFactBuff, 'type'>>;
}
interface GW2ApiFactRadius extends GW2ApiFactBase {
    type: 'Radius';
    distance: number;
}
interface GW2ApiFactRange extends GW2ApiFactBase {
    type: 'Range';
    value: number;
}
interface GW2ApiFactRecharge extends GW2ApiFactBase {
    type: 'Recharge';
    value: number;
}
interface GW2ApiFactStunBreak extends GW2ApiFactBase {
    type: 'StunBreak';
    value: boolean;
}
interface GW2ApiFactTime extends GW2ApiFactBase {
    type: 'Time';
    duration: number;
}
interface GW2ApiFactUnblockable extends GW2ApiFactBase {
    type: 'Unblockable';
    value: boolean;
}
declare type GW2ApiFact = GW2ApiFactAttributeAdjust | GW2ApiFactBuff | GW2ApiFactBuffConversion | GW2ApiFactComboField | GW2ApiFactComboFinisher | GW2ApiFactDamage | GW2ApiFactDistance | GW2ApiFactDuration | GW2ApiFactHeal | GW2ApiFactHealingAdjust | GW2ApiFactNoData | GW2ApiFactNumber | GW2ApiFactPercent | GW2ApiFactPrefixedBuff | GW2ApiFactRadius | GW2ApiFactRange | GW2ApiFactRecharge | GW2ApiFactStunBreak | GW2ApiFactTime | GW2ApiFactUnblockable;

declare type GW2ApiTraitedFactAdditional = {
    requires_trait: number;
    overrides?: number;
};
interface GW2ApiTraitedFactAttributeAdjust extends GW2ApiFactAttributeAdjust, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactBuff extends GW2ApiFactBuff, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactBuffConversion extends GW2ApiFactBuffConversion, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactComboField extends GW2ApiFactComboField, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactComboFinisher extends GW2ApiFactComboFinisher, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactDamage extends GW2ApiFactDamage, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactDistance extends GW2ApiFactDistance, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactDuration extends GW2ApiFactDuration, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactHeal extends GW2ApiFactHeal, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactHealingAdjust extends GW2ApiFactHealingAdjust, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactNoData extends GW2ApiFactNoData, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactNumber extends GW2ApiFactNumber, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactPercent extends GW2ApiFactPercent, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactPrefixedBuff extends GW2ApiFactPrefixedBuff, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactRadius extends GW2ApiFactRadius, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactRange extends GW2ApiFactRange, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactRecharge extends GW2ApiFactRecharge, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactStunBreak extends GW2ApiFactStunBreak, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactTime extends GW2ApiFactTime, GW2ApiTraitedFactAdditional {
}
interface GW2ApiTraitedFactUnblockable extends GW2ApiFactUnblockable, GW2ApiTraitedFactAdditional {
}
declare type GW2ApiTraitedFact = GW2ApiTraitedFactAttributeAdjust | GW2ApiTraitedFactBuff | GW2ApiTraitedFactBuffConversion | GW2ApiTraitedFactComboField | GW2ApiTraitedFactComboFinisher | GW2ApiTraitedFactDamage | GW2ApiTraitedFactDistance | GW2ApiTraitedFactDuration | GW2ApiTraitedFactHeal | GW2ApiTraitedFactHealingAdjust | GW2ApiTraitedFactNoData | GW2ApiTraitedFactNumber | GW2ApiTraitedFactPercent | GW2ApiTraitedFactPrefixedBuff | GW2ApiTraitedFactRadius | GW2ApiTraitedFactRange | GW2ApiTraitedFactRecharge | GW2ApiTraitedFactStunBreak | GW2ApiTraitedFactTime | GW2ApiTraitedFactUnblockable;

declare type GW2ApiProfession = ProfessionTypes;

declare type GW2ApiSkillCategory = 'Arcane' | 'Banner' | 'Burst' | 'Cantrip' | 'CelestialAvatar' | 'Chain' | 'Clone' | 'Conjure' | 'Consecration' | 'Corruption' | 'Deception' | 'DualWield' | 'Elixir' | 'Gadget' | 'Glamour' | 'Glyph' | 'Kit' | 'LegendaryAssassin' | 'LegendaryDemon' | 'LegendaryDragon' | 'LegendaryDwarf' | 'Manipulation' | 'Mantra' | 'Mark' | 'Meditation' | 'Minion' | 'Overload' | 'Phantasm' | 'Physical' | 'PrimalBurst' | 'Rage' | 'Shout' | 'Signet' | 'Spectral' | 'Spirit' | 'SpiritWeapon' | 'Shroud' | 'Stance' | 'StealthAttack' | 'Survival' | 'Symbol' | 'Tome' | 'Transform' | 'Trap' | 'Trick' | 'Turret' | 'Venom' | 'Virtue' | 'Ward' | 'Well';
declare type GW2ApiSkillType = 'Bundle' | 'Elite' | 'Heal' | 'Monster' | 'Pet' | 'Profession' | 'Toolbelt' | 'Utility' | 'Weapon';
declare type GW2ApiSkillAttunement = 'Air' | 'Earth' | 'Fire' | 'Water';
declare type GW2ApiSkillFlag = 'GroundTargeted' | 'NoUnderwater';
declare type GW2ApiSkillSlot = 'Downed_1' | 'Downed_2' | 'Downed_3' | 'Downed_4' | 'Elite' | 'Heal' | 'Pet' | 'Profession_1' | 'Profession_2' | 'Profession_3' | 'Profession_4' | 'Profession_5' | 'Toolbelt' | 'Utility' | 'Weapon_1' | 'Weapon_2' | 'Weapon_3' | 'Weapon_4' | 'Weapon_5';

interface GW2ApiSkill {
    id: number;
    name: string;
    description?: string;
    icon?: string;
    chat_link: string;
    flags?: GW2ApiSkillFlag[];
    facts?: GW2ApiFact[];
    traited_facts?: GW2ApiTraitedFact[];
    cost?: number;
    initiative?: number;
    professions?: GW2ApiProfession[];
    specialization?: number;
    type?: GW2ApiSkillType;
    categories?: GW2ApiSkillCategory[];
    weapon_type?: GW2ApiWeaponType | 'None';
    slot?: GW2ApiSkillSlot;
    dual_wield?: GW2ApiOneHandedWeaponType | 'None' | 'Nothing';
    attunement?: GW2ApiSkillAttunement;
    dual_attunement?: GW2ApiSkillAttunement;
    flip_skill?: number;
    next_chain?: number;
    prev_chain?: number;
    transform_skills?: number[];
    bundle_skills?: number[];
    toolbelt_skill?: number;
    subskills?: {
        id: number;
        attunement?: GW2ApiSkillAttunement;
        form?: 'CelestialAvatar';
    }[];
}

interface GW2ApiSpecialization {
    id: number;
    name: string;
    profession: string;
    elite: boolean;
    icon: string;
    profession_icon?: string;
    profession_icon_big?: string;
    background: string;
    minor_traits: number[];
    major_traits: number[];
    weapon_trait?: number;
}

interface GW2ApiTraitBase {
    id: number;
    name: string;
    description?: string;
    icon: string;
    facts?: GW2ApiFact[];
    traited_facts?: GW2ApiTraitedFact[];
}
interface GW2ApiTraitSkill extends GW2ApiTraitBase {
    flags: unknown[];
    chat_link: string;
    categories?: unknown[];
}
interface GW2ApiTrait extends GW2ApiTraitBase {
    specialization: number;
    tier: number;
    order: number;
    slot: 'Major' | 'Minor';
    skills?: GW2ApiTraitSkill[];
}

declare function useSkills(ids: Id[]): APICacheGetMultipleResult<GW2ApiSkill>;
declare function useSkill(id: Id): APICacheGetOneResult<GW2ApiSkill>;
declare function useTraits(ids: Id[]): APICacheGetMultipleResult<GW2ApiTrait>;
declare function useTrait(id: Id): APICacheGetOneResult<GW2ApiTrait>;
declare function useItems(ids: Id[]): APICacheGetMultipleResult<GW2ApiItem>;
declare function useItem(id: Id): APICacheGetOneResult<GW2ApiItem>;
declare function useSpecializations(ids: Id[]): APICacheGetMultipleResult<GW2ApiSpecialization>;
declare function useSpecialization(id: Id): APICacheGetOneResult<GW2ApiSpecialization>;

export { APILanguageProvider, Attribute, Augmentation, Aura, Boon, Coin, CommonEffect, Condition, ConsumableEffect, ControlEffect, Item$1 as CreateItem, CustomComponent, DetailsHeader, Error, Icon, IconWithText, Item, MistlockInstability, Profession, Progress, Race, Skill, Specialization, Spinner, Tooltip, TooltipContainer, Trait, TraitLine, WikiLink, useItem, useItems, useSkill, useSkills, useSpecialization, useSpecializations, useTrait, useTraits };
