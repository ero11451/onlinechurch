import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from 'src/app/db/model/blog';
import { AllpostService } from 'src/app/db/service/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  postData: Post = new Post();
  postId;

  private unsubscribe$ = new Subject<void>();
  constructor(
    private route: ActivatedRoute,
    private blogService: AllpostService) {
  if (this.route.snapshot.params['postid']) {
  this.postId = this.route.snapshot.paramMap.get('postid');
  console.log(this.postId)
  }
  }
  ngOnInit() {
  this.blogService.getPostbyId(this.postId)
  .pipe(takeUntil(this.unsubscribe$))
  .subscribe(
  (result: Post) => {
  this.postData = result;
  console.log(result)
  }
  );
  }
  ngOnDestroy() {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
  }

}
