import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {PostService} from "./services/post.service"
import {PostComponent} from "./services/post.component"
import {AppComponent} from './app.component'
import {HttpModule} from '@angular/http'

@NgModule({
	imports :[
	BrowserModule,
	FormsModule,
	HttpModule
	],
	declarations:[AppComponent,PostComponent],
	bootstrap:[AppComponent]
})

export class AppModule{

}