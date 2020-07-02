#!/usr/bin/env node

import { Kernel, handleError, logger } from '@adonisjs/ace';
import { Ioc } from '@adonisjs/fold';
import { Application } from '@adonisjs/application/build/standalone';
import * as path from 'path';
import { New } from '../commands/NewCommand';


const application = new Application(path.join('../../',__dirname), new Ioc(), {}, {})

const kernel = new Kernel(application) 

kernel.flag('help', (value,options, command) => {
    if (!value) {
        return
      }
 kernel.printHelp(command)
 process.exit(0)
}, {})

// kernel.flag('env', (value) => {
//   process.env.NODE_ENV = value
// }, { type: 'string', description: 'Sets environment variable for process' })

kernel.register([New]) 
//kernel.printHelp(New)

 
kernel.handle(process.argv.splice(2)).catch(handleError)