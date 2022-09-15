export default function formatDuration(value: number) {
  let seconds = value;

  const weeks = Math.floor(seconds / 604800);
  seconds %= 604800;

  const days = Math.floor(seconds / 86400);
  seconds %= 86400;

  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return [
    weeks && `${weeks} 주`,
    days && `${days} 일`,
    hours && `${hours} 시간`,
    minutes && `${minutes} 분`,
    seconds && `${seconds}${minutes ? ' 초' : '초'}`,
  ]
    .filter((entry) => !!entry)
    .join(', ');
}
