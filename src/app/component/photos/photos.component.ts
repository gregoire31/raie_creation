import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  uploadedFilesBefore: Array < File > ;
  uploadedFilesAfter: Array < File > ;
  private user : any = {}
  public imagePathAvant;
  public imagePathApres;
  imgURLApres : any;
  imgURLAvant : any;
  public message: string;
  private imageAvant: boolean = false
  private imageApres : boolean = false
  constructor() { }

  ngOnInit() {
  }


  fileChangeBefore(element) {
    
    if (element.target.files.length === 0)
      return;
 
    var mimeType = element.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePathAvant = element.target.files;
    reader.readAsDataURL(element.target.files[0]); 
    reader.onload = (_event) => { 
      this.imgURLAvant = reader.result; 
    }

    this.uploadedFilesBefore = element.target.files;
    this.imageAvant = true
    
}

fileChangeAfter(element) {
  
  if (element.target.files.length === 0)
    return;

  var mimeType = element.target.files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  this.imagePathApres = element.target.files;
  reader.readAsDataURL(element.target.files[0]); 
  reader.onload = (_event) => { 
    this.imgURLApres = reader.result; 
  }

  this.uploadedFilesAfter = element.target.files;
  this.imageApres = true
  
}

  // upload() {
    
  //   let formData = new FormData();
  //   let dataToExport = `${this.user.uid}-${this.uploadedFiles[0].name}`
    
  //   formData.append("avatar", this.uploadedFiles[0], dataToExport);
    
  //   // this.rendezvousService.sendImage(formData).subscribe((response) => {
  //   //   console.log('response received is ', response);
      
  // }
}

  //afficher success
  // this.btnValid = true;
        
  




