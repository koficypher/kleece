import { BaseCommand, args,  } from '@adonisjs/ace';

export class New extends BaseCommand {

    @args.string({required: false, description: "name of template to scaffold"})
    public template: string;
    

    public static commandName = 'new'
    public static description = 'Creates a new project'


    async handle() {
      const answer  = await this.prompt.choice('Which project template do you want to scaffold', [
              'Python Server',
              'Node Server with JS',
              'Node Server with TS',
              'Angular CLI with State Management',
              'Electron App'
          ])
     this.logger.success(`${answer}`)
    }

}