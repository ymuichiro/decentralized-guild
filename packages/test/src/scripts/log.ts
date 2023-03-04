import util from 'util';

export function debugLog<T>(title: string, data: T) {
  const inspect = util.inspect(data, false, 5, true);
  console.log(`------ ${title} ------\n`, inspect, '\n');
}
