import createDebug from 'debug';
import type { Arguments as ParentArguments } from '../cli.js';
import { Argv, dev, YargsArguments } from '../util.js';
import * as commands from './util/index.js';

const debug = createDebug('cli:util');

export const command = 'util <command>';
export const desc = 'Utilities';

export function builder(yargs: Argv<ParentArguments>) {
    for (const command of Object.values(commands)) {
        if (command.command === 'validate-discord-titles' && !dev) continue;
    
        // @ts-expect-error
        yargs.command(command);
    }

    return yargs;
}

export type Arguments = YargsArguments<ReturnType<typeof builder>>;