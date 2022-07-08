import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  data=[
    {"Name":"Sam","Age":21,"Photo":"https://airnfts.s3.amazonaws.com/profile-images/0xD9c4216cFE7c70344f80035B0bf5FBE01AA69d37_1619305985184.png"},
    {"Name":"Ben","Age":25,"Photo":"https://airnfts.s3.amazonaws.com/profile-images/0xD9c4216cFE7c70344f80035B0bf5FBE01AA69d37_1619305985184.png"},
    {"Name":"Tom","Age":30,"Photo":"https://airnfts.s3.amazonaws.com/profile-images/0xD9c4216cFE7c70344f80035B0bf5FBE01AA69d37_1619305985184.png"},
    {"Name":"Mark","Age":18,"Photo":"https://airnfts.s3.amazonaws.com/profile-images/0xD9c4216cFE7c70344f80035B0bf5FBE01AA69d37_1619305985184.png"},
    {"Name":"John","Age":28,"Photo":"https://airnfts.s3.amazonaws.com/profile-images/0xD9c4216cFE7c70344f80035B0bf5FBE01AA69d37_1619305985184.png"},
    {"Name":"Steve","Age":24,"Photo":"https://airnfts.s3.amazonaws.com/profile-images/0xD9c4216cFE7c70344f80035B0bf5FBE01AA69d37_1619305985184.png"}
  ]
}
