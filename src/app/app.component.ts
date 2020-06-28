import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';
  _attachments: any;
  url: any;

  myCustomObject = {
    _attachments: Object.create(null),
  };

  add(form: NgForm) {
    console.log(form.value);

    let newProp = form.value.newFile;
    this.myCustomObject._attachments = {
      ...newProp,
    };
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed

        this.url = event.target.result;
      };
    }

    this.uploadFile(event);
  }

  uploadFile(e) {
    //console.log(e.target.files[0]);
    var getFileName = e.target.files[0].name;

    let getFile = e.target.files[0];
    let newfilename = Object.create(null);
    newfilename.type = getFile.type;
    newfilename.data = getFile;

    Object.defineProperties(this.myCustomObject._attachments, {
      [e.target.files[0].name]: {
        value: newfilename,
      },
    });

    console.log(this.myCustomObject);
    console.log(newfilename);
  }
}
