import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../service/review.service';

@Component({
  selector: 'app-scheduledreview',
  templateUrl: './scheduledreview.component.html',
  styleUrls: ['./scheduledreview.component.css']
})
export class ScheduledreviewComponent implements OnInit {
  ReviewDTO: any;
  Department:any;
  User:any;
  Users:any;
  StatusID=0;
  ReviewerID=0;
  TraineeID=0;



  constructor(private rs:ReviewService) { }
  
  StatusId=1;
 

  Review:any={
    id: 0,
    reviewerId: 0,
    statusId: 0,
    traineeId: 0,
    reviewDate: Date.now,
    reviewTime:0,
    mode: '',
    isDisabled:false
  }

  


  ngOnInit(): void {
    this.getAllDepartments();
    this.getAllReviewer();
     this.getAllUser();
     this.setoption();
    
     
  }
  setoption(){
    if(this.Review.id!=null){
      this.getAllReview();
    }
  }
  OnSubmit() {
    if(this.Review.id!=null){
      console.log(this.Review)
    this.rs.putReview(this.Review).subscribe((res: any) => {
      console.log(res);
      this.Review(res);
    })
    }
    else{
      console.log(this.Review)
      this.rs.postReview(this.Review).subscribe((res: any) => {
        console.log(res);
        this.Review(res);
      })
    }
    
  }
  getAllReview(){
    this.rs.getReviewById(10).subscribe(a=>{
      console.log(a)
      this.Review = a
    })
  }
  getAllDepartments(){
    this.rs.getAllDepartments().subscribe(a=>{
      console.log(a)
      this.Department = a
    })
  }
  getAllReviewer(){
    this.rs.getAllReviewer(1).subscribe(a=>{
      console.log(a)
      this.User = a
    })
  }
  getAllUser(){
    this.rs.getAllUser(1,2).subscribe(a=>{
      console.log(a)
      this.Users = a
    })
  }

 

}
