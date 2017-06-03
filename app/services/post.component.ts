import  {Component} from '@angular/core' 
import {PostService} from './post.service'
@Component({
	selector:"my-post",
	template:`<div class="container">
	<h1>My Blog Posts</h1>
	<div>
		<label>Title:</label>
		<input class="form-control" type="text" [(ngModel)]="title"/><br>
		<label>Name:</label>
		<input class="form-control" type="text" [(ngModel)]="name"/><br>
		<input type="button" class="btn btn-primary" (click)="addPost()" value="AddPost"/>
	</div>


	<div class="container">
	<ul *ngFor="let post of posts">
		<li>{{post.title}}</li>
		<li>{{post.body}}</li>
	</ul>
	</div>
	</div>`
})



export class PostComponent{
	private posts : any[];
	private title :string;
	private body :string;

	private newPost :any;
	constructor(private postService : PostService){
		this.postService.getPosts().subscribe(response =>{
			this.posts = response;
		});
	}

	addPost(){
		this.newPost ={
			title:this.title,
			body :this.body
		}
		console.log(this.newPost)
		//this.postService.appNewPost(this.newPost);
	}


}

