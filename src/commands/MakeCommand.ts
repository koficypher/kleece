
import { BaseCommand, args, flags } from '@adonisjs/ace';

export class Make extends BaseCommand {
    @args.string()
    public resource: string
   
    @args.string()
    public name: string
   
    @flags.boolean()
    public overwrite: boolean
    
    public static commandName = 'make'
    public static description = 'Make a new resource'
    
    // called when the command is executed
    async handle () {
      console.log(this.name)
      console.log(this.resource)
      console.log(this.overwrite)
    }  
  }