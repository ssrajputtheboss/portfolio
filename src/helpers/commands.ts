import { Command, CommandJSON } from '../Models';

export const commandStringToJSON: Function = (commandLine: string): CommandJSON => {
  commandLine = commandLine.trim().toLowerCase();
  const words = commandLine.split(/\s+/);
  if (!words.length)
    return {
      main: 'invalid',
      args: []
    };
  return {
    main: words[0],
    args: words.slice(1, words.length)
  };
};

/*
commands are:
sort -a|-d
cd ..|repoName
filter langName
search word
*/

const isValidCommand: Function = (cmd: string): boolean => {
  if (['sort', 'filter', 'cd', 'search'].includes(cmd)) return true;
  return false;
};

const getSubFunc: Function = (main: string, arg: Array<string>): string => {
  if (main === 'cd') {
    return arg[0] === '..' ? 'back' : arg[0];
  } else if (main === 'filter')
    return ['python', 'dart', 'javascript', 'typescript', 'java', 'html', 'css'].includes(arg[0])
      ? arg[0]
      : 'invalid';
  else if (main === 'sort')
    return arg[0] === '-a' ? 'increasing' : arg[0] === '-d' ? 'decreasing' : 'invalid';
  else if (main === 'search') return arg.join(' ');
  return 'invalid';
};

export const validateCommand: Function = (cjson: CommandJSON): Command => {
  if (isValidCommand(cjson.main)) {
    if (
      (cjson.main === 'search' && cjson.args.length > 0) ||
      (cjson.main !== 'search' && cjson.args.length === 1)
    ) {
      return {
        func: cjson.main,
        subFunc: getSubFunc(cjson.main, cjson.args)
      };
    } else {
      return {
        func: cjson.main,
        subFunc: 'invalid'
      };
    }
  } else {
    //invalid
    return {
      func: 'invalid',
      subFunc: null
    };
  }
};

export const execCommand: Function = (command: string, callback: Function): string => {
  const cjson: Command = validateCommand(commandStringToJSON(command));
  command = cjson.func;
  if (cjson.func === 'sort') {
    if (cjson.subFunc === 'invalid' || cjson.subFunc === null) {
      callback(cjson);
      return `${command} command : arguments are invalid`;
    } else {
      callback(cjson);
      return `${command} executed : list sorted in ${cjson.subFunc} order`;
    }
  } else if (cjson.func === 'filter') {
    if (cjson.subFunc === 'invalid' || cjson.subFunc === null) {
      callback(cjson);
      return `${command} command : arguments are invalid`;
    } else {
      callback(cjson);
      return `${command} executed : list filtered with ${cjson.subFunc} projects`;
    }
  } else if (cjson.func === 'cd') {
    if (cjson.subFunc === 'invalid' || cjson.subFunc === null) {
      callback(cjson);
      return `${command} command : arguments are invalid`;
    } else {
      callback(cjson);
      return `${command} executed : moved to ${cjson.subFunc} project`;
    }
  } else if (cjson.func === 'search') {
    if (cjson.subFunc === 'invalid' || cjson.subFunc === null) {
      callback(cjson);
      return `${command} command : arguments are invalid`;
    } else {
      callback(cjson);
      return `${command} executed : search results for ${cjson.subFunc}`;
    }
  } else {
    callback(cjson);
    return `Invalid Command`;
  }
};
