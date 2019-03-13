import {Component, EventEmitter, Output} from '@angular/core';


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredValue="";
    enteredTitle="";
    newPost = 'NO CONTENT que hubo';
    @Output() postCreated = new EventEmitter();
    enteredContent = "";
    
    
    onInsertPost() {
        const post = {
            title: this.enteredTitle, 
            content: this.enteredContent
        };
      
        this.postCreated.emit(post);
    }
}