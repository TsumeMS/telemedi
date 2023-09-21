import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Task} from "./task/task.entity";
import {TasksModule} from "./task/tasks.module";
import {TasksService} from "./task/tasks.service";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'P@ssw0rd',
            database: 'telemedi_todo_list',
            entities: [Task],
            synchronize: true
        }),
        TasksModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
