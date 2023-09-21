import {Test, TestingModule} from '@nestjs/testing';
import {TasksController} from "./tasks.controller";
import {TasksService} from "./tasks.service";
import {Task} from "./task.entity";

describe('TaskController', () => {
    let taskController: TasksController;
    let taskService: TasksService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TasksController],
            providers: [{
                provide: TasksService,
                useValue: {
                    list: jest.fn(),
                    add: jest.fn(),
                    update: jest.fn(),
                    delete: jest.fn()
                }
            }],
        }).compile();

        taskService = module.get<TasksService>(TasksService);
        taskController = module.get<TasksController>(TasksController)
    });

    describe('/tasks (GET)', () => {
        it('should return task list', async () => {
            const result = [{id: 1, content: "test", done: false}];
            // @ts-ignore
            jest.spyOn(taskService, 'list').mockImplementation(() => result);
            expect(await taskController.list()).toBe(result);
        });
    });

    describe('/tasks (POST)', () => {
        it('should return true after created', () => {
            const task = new Task();
            task.content = 'test';
            expect(taskController.add(task)).toBe(true);
        });
    });

    describe('/tasks/:id (PATCH)', () => {
        it('should return true after updated', () => {
            const task = new Task();
            task.done = true;
            expect(taskController.update(1, task)).toBe(true);
        });
    });

    describe('/tasks/:id (DELETE)', () => {
        it('should return true after deleted task', () => {
            expect(taskController.delete(1)).toBe(true);
        });
    });
});
