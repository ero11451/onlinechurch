import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from 'src/app/db/model/blog';
import { AllpostService } from 'src/app/db/service/post.service';
import { CommentService } from '../../../db/service/comment.service';
import { FormBuilder, FormControl,  Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/db/service/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {
// this is will show current user data
  userImage ;
  userName ;
  userId ;
  commentTime = new Date();
  //
  allComment
  // 
  postData: Post = new Post();
  postId;
  author: string;
  authorImage;
  time: any;
  content: string;
  postImage: string;
  // tslint:disable-next-line: variable-name
  validations_form: FormGroup;
  // tslint:disable-next-line: variable-name
  validation_messages = {
    comment: [
      { type: 'required', message: 'comment is required.' },
    ],
  };
  private unsubscribe$ = new Subject<void>();
  constructor(
    private commentSer : CommentService,
    private auth: AngularFireAuth,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userSer: UserService,
    private blogService: AllpostService) {
  if (this.route.snapshot.params['postid']) {
  this.postId = this.route.snapshot.paramMap.get('postid');
  console.log(this.postId)
  }
  this.validations_form = this.formBuilder.group({
    comment: new FormControl('', Validators.compose([
      Validators.required,
    ])),
   
  });
  }
  ngOnInit() {
  this.blogService.getPostbyId(this.postId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
      (result: Post) => {
      this.postData = result;
      this.author = result.author;
      this.time = result.createdDate;
      this.content = result.content;
      this.postImage = result.photo;
      this.authorImage = result.authorimage;
      }
      );
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
  }
  async makeComment(value ){
    await this.getUser();
    this.commentSer.saveComment(
      value.comment,
      this.postId,
      this.userId,
      this.userImage,
      this.commentTime
      );
  }
  getUser(){
    this.auth.authState.subscribe(user => {
      this.userSer.retrieveUserDocumentFromID(user.uid).subscribe(
        d => {
        console.log(d);
        this.userImage = d.userImage;
        this.userName = d.displayName;
        this.userId = d.uid;
          });
     });
  }
  getComment(){
    this.commentSer.getAllCommentsForBlog(this.postId).subscribe(d => {
      this.allComment = d;
    });
  }
}
