import { BehaviourSubjectService } from './services/behaviour-subject.service';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmployeeList } from './datamodal/employee';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service1Service]
})
export class AppComponent {
  title = 'Angular reference project';
  employeeList: EmployeeList[] = [];
  reactiveForm: any;
  user: any;
  newUser: any;
  submitted: boolean;
  localStorageReactiveFormData: any;
  staticJsonData: any;

  name = 'Angular';
  daysLeft = 'Days Left';
  constructor(private service1: Service1Service, private behaviourService: BehaviourSubjectService, private fb: FormBuilder) {
    this.submitted = false;
    this.reactiveForm = fb.group({
      "firstName": ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      "lastName": ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    });
  }

  ngOnInit() {
    this.behaviourService.getUser.subscribe(user => this.user = user);
    this.service1.getEmployees().subscribe(
      data => {
        this.employeeList = data;
      })
    if (localStorage.getItem('reactiveFormData')) {
      let data: any = localStorage.getItem('reactiveFormData');
      this.localStorageReactiveFormData = JSON.parse(data);
    }
    this.service1.getStaticJSONData().subscribe(data => {
      this.staticJsonData = data;
    })
  }
  get f() {
    return this.reactiveForm.controls;
  }
  onSubmitTemplateBased(form: any) {
    console.log("Template driven form submitted");
    console.log(form);
  }

  onSubmitReactiveBased() {
    this.submitted = true;
    if (this.reactiveForm.valid) {
      console.log("reactive form submitted");
      let objects: any = [];
      let item = this.reactiveForm.value;
      if (localStorage.getItem('reactiveFormData')) {
        const localStorageData: any = localStorage.getItem('reactiveFormData')
        let oldData = JSON.parse(localStorageData);
        oldData.push(item);
        localStorage.setItem('reactiveFormData', JSON.stringify(oldData));
      } else {
        objects.push(item);
        localStorage.setItem('reactiveFormData', JSON.stringify(objects));
      }
      this.resetReactiveform();
      this.submitted = false;
    }
  }
  resetReactiveform() {
    this.reactiveForm.reset();
  }
  editedUser() {
    this.behaviourService.updateUser(this.newUser);
  }
}
