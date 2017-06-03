import {Component} from '@angular/core'
import {PostService} from "./services/post.service"
import {PostComponent} from "./services/post.component"

@Component({
	selector:"my-app",
	template:`<h1>Hello</h1><br>
				<my-post></my-post>`,
	providers:[PostService]
})

export class AppComponent{

}