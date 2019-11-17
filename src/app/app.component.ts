import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Reminder App';
  public students;
  //initialize the call using StudentService 
  constructor(private _myService: StudentService) { }
  ngOnInit() {
    this.getStudents();
  }
  //method called OnInit
  getStudents() {
   this._myService.getStudents().subscribe(
      //read data and assign to public variable students
      data => { this.students = data},
      err => console.error(err),
      () => console.log('finished loading')
    );
  }
  onDelete(studentId: string) {
    this._myService.deleteStudent(studentId);
  }

}

