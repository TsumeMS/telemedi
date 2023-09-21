import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {TasksService} from "./tasks.service";
import {Task} from "./task.entity";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    list() {
        return this.tasksService.list();
    }

    @Post()
    async add(@Body() task: Task) {
        return await this.tasksService.add(task);
    }

    @Patch(':id')
    async update(@Param() id: number, @Body() task: Task) {
        return await this.tasksService.update(id, task);
    }

    @Delete(':id')
    async delete(@Param() id: number) {
        return await this.tasksService.delete(id);
    }
}
