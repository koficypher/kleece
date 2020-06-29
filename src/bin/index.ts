#!/usr/bin/env node

import { Kernel, args,flags, BaseCommand } from '@adonisjs/ace';
import { Ioc } from '@adonisjs/fold';
import { Application } from '@adonisjs/application/build/standalone';
import * as path from 'path';
import { Make } from '../commands/MakeCommand';


const application = new Application(path.join('../../',__dirname), new Ioc(), {}, {})

const kernel = new Kernel(application)

kernel.flag('help', (value,options, command) => {
    if (!value) {
        return
      }
  
  kernel.printHelp(command)
  process.exit(0)

}, {})

kernel.register([Make]) 


 
kernel.handle(process.argv.splice(2))