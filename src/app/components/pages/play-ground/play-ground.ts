import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ComponentEx } from './components/component-ex/component-ex';
import { Task } from './model/task';
import { Goal } from './model/goal';
import { IsAdmin } from "./directive/is-admin";
import { SharedData } from './services/sharedData/shared-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-play-ground',
  imports: [FormsModule, ComponentEx, IsAdmin, DragDropModule],
  templateUrl: './play-ground.html',
  styleUrl: './play-ground.scss',
})
export class PlayGround {
  datatochild = signal("hello child");
  datafromchild = signal("");
  task = signal("");
  taskList = signal<Task[]>([])
  showDoneTask = signal(false);
  isAdmin = signal(false);
  sharedData = inject(SharedData);
  dataFromApi = signal({});
  http = inject(HttpClient);

  goalListDragDrop = signal<Goal[]>([
    {
      id: 1,
      name: "Todo",
      tasks: [
        { id: 101, task: "Buy groceries", isDone: false },
        { id: 102, task: "Walk the dog", isDone: false },
        { id: 103, task: "Read a book", isDone: false }
      ]
    },
    {
      id: 2,
      name: "In Progress",
      tasks: [
        { id: 201, task: "Learn Angular Signals", isDone: false },
        { id: 202, task: "Implement Drag & Drop", isDone: false }
      ]
    },
    {
      id: 3,
      name: "Done",
      tasks: [
        { id: 301, task: "Setup Project", isDone: true }
      ]
    }
  ]);

  counter = signal(0);
  isEvenOrOdd = computed(() => this.checkEvenOrOdd())


  increment() {
    this.counter.update((pv) => pv + 1)
  }
  decrement() {

    if (this.counter() > 0) {
      this.counter.update((pv) => pv - 1)
    } else {
      this.counter.set(0);
    }
  }
  checkEvenOrOdd() {
    if (this.counter() % 2 == 0) {
      return "Even"
    } else {
      return "Odd"
    }
  }

  datachildUpdate() {
    console.log("Update Clicked");
    this.datatochild.set("hello child updated")
  }
  datarest() {
    console.log("Reset Clicked");
    this.datatochild.set("hello child reset")
  }

  handleDataFromChild(data: string) {
    console.log(data);
    this.datafromchild.set(data);
  }
  watchTask(task: string) {
    this.task.set(task)
  }
  addTask() {
    if (this.task() == "") {
      return;
    }
    this.taskList.update((pv) => [...pv, { id: pv.length + 1, task: this.task(), isDone: false }])
    this.task.set("")
  }
  doneTask(id: number) {
    setInterval(() => {
      this.taskList.update((pv) => pv.map((task) => task.id == id ? { ...task, isDone: !task.isDone } : task))
    }, 3000);
  }
  showDoTask() {
    this.showDoneTask.set(!this.showDoneTask())
  }
  toggleAdmin(): void {
    this.isAdmin.set(!this.isAdmin())
  }
  fetchData() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res) => {
      this.dataFromApi.set(JSON.stringify(res))
    })
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    // Update signal
    this.goalListDragDrop.update(goals => [...goals]);
  }

}
