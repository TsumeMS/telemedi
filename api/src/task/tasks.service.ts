import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "./task.entity";
import {Repository} from "typeorm";

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>
    ) {}

    async list(): Promise<Task[]> {
        try {
            return await this.taskRepository.find();
        } catch (error) {
            return error
        }
    }

    async add(task: Task) {
        try {
            await this.taskRepository.insert(task);
            return true;
        } catch (error) {
            return error;
        }
    }

    async update(id: number, task: Task) {
        try {
            await this.taskRepository.update(id, task);
            return true;
        } catch (error) {
            return error;
        }
    }

    async delete(id: number) {
        try {
            await this.taskRepository.delete(id);
            return true
        } catch (error) {
            return error;
        }
    }
}
