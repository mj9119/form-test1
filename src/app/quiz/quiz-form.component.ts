import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

//import { IQuestion } from './question';
import { User } from './user';
import { IQuestion } from './question';

@Component({
    selector: 'myquiz-app',
    templateUrl: './quiz-form.component.html',
    //template:`<div>testIT</div>`
    styleUrls: ['./quiz-form.component.css']
})
 
export class QuizFormComponent
        implements OnInit {

    //filteredQuestions: IQuestion[];
    questions: IQuestion[] = [
        {
            "questionId": 11,
            "questionPhrased": "The organic artillery support for the 1st Brigade, 5th Inf Division in Vietnam was provided by 5th Bn, 4th Artillery.  The weapon system was:",
            "firstOpt": "M107 175mm self-propelled gun",
            "secondOpt": "M110 203mm self-propelled howitzer",
            "thirdOpt": "M114 155mm towed howitzer",
            "fourthOpt": "M109 155mm self-propelled howitzer",
            "correctOpt": "fourthOpt",
            "hint": "Hint: Some people think it was a tank."
        },
        {
            "questionId": 10,
            "questionPhrased": "In the 1950s, the 5th Division became part of what program that periodically interchanged entire divisions between overseas locations and their permanent station in the United States:",
            "firstOpt": "Gyroscope",
            "secondOpt": "Reforger",
            "thirdOpt": "Team Spirit",
            "fourthOpt": "Lightning Forge",
            "correctOpt": "firstOpt",
            "hint": "Hint: As you changed locations it could leave your head spinning."
        },

        {
            "questionId": 9,
            "questionPhrased": "The Fifth Division was originally organized:",
            "firstOpt": "June 1914 – after the assassination of Archduke Franz Ferdinand",
            "secondOpt": "July 1914 – after the start of World War I",
            "thirdOpt": "May 1915 – after the sinking of the RMS Lusitania",
            "fourthOpt": "Dec 1917 – after the US declared war on Germany",
            "correctOpt": "fourthOpt",
            "hint": "Hint: The US began expanding the size of the active Army eventually growing from 133,000 soldiers to 4 million."
        },
        {
            "questionId": 8,
            "questionPhrased": "Which general officer said this about the 5th Division's valor during World War II:  \“To my mind history does not record incidents of greater valor than your crossing of the Sauer and Rhine.\”",
            "firstOpt": "General Eisenhower",
            "secondOpt": "General Bradley",
            "thirdOpt": "Field Marshall Montgomery",
            "fourthOpt": "General Patton",
            "correctOpt": "fourthOpt",
            "hint": "Hint:  A slap changed the course of his career."
        },
        {
            "questionId": 7,
            "questionPhrased": "In August 1969, the 1st Brigade 5th Infantry Division assumed full responsibility from the Marines of the following area:",
            "firstOpt": "The Fish Hook",
            "secondOpt": "Parrot’s Beak",
            "thirdOpt": "Leatherneck Square",
            "fourthOpt": "Mekong River",
            "correctOpt": "thirdOpt",
            "hint": "Hint: A nickname for Marines."
        },
        {
            "questionId": 6,
            "questionPhrased": "The task force from the 5th Division that participated in Operation Just Cause in Panama in December 1989 was:",
            "firstOpt": "Task Force Panama",
            "secondOpt": "Task Force la Comandancia",
            "thirdOpt": "Task Force Regulars",
            "fourthOpt": "Task Force South",
            "correctOpt": "thirdOpt",
            "hint": "Hint: The name was originally from the Battle of Chippewa in 1814."
        },
        {
            "questionId": 5,
            "questionPhrased": "When laying an artillery battery with an M2A2 aiming circle and survey control is available, the memory aid is TFOOL ULU.  TFOOL stands for \“take the fire out of the old lady.\”  What does this represent?",
            "firstOpt": "Ensure there is not a fire between you and the howitzer.",
            "secondOpt": "Subtract the azimuth of fire from the azimuth to the end of the orienting line.",
            "thirdOpt": "Take the firing deflection from the observer-target line.",
            "fourthOpt": "Add the azimuth of fire to the azimuth to the registration point.",
            "correctOpt": "secondOpt",
            "hint": "Hint:  the result is the Orienting Angle that is set on the Upper Motion of the Aiming Circle."
        },
        {
            "questionId": 4,
            "questionPhrased": "Which of the following leaders popularized the quote: \"Leadership is intangible, and therefore no weapon ever designed can replace it.\"?",
            "firstOpt": "B.L. Montgomery",
            "secondOpt": "Omar N. Bradley",
            "thirdOpt": "Douglas MacArthur",
            "fourthOpt": "William \'Bill\' Slim",
            "correctOpt": "secondOpt",
            "hint": "He commanded a 'Fifth Division' general"
        },
        {
            "questionId": 3,
            "questionPhrased": "This was often asked in Basic and AIT: What are the lifesaving steps? (The ABC's of medical treatment)",
            "firstOpt": "1:Open the airway and restore breathing.  2:Stop the bleeding / Protect the wound. 3:Prevent shock.",
            "secondOpt": "1:Clear the Airway. 2:Apply pressure to the abdomen 3:Call for medic",
            "thirdOpt": "1:Clear the airway. 2:Get Med Evac. 3:Distract patient with stories.",
            "fourthOpt": "1:Call Medic. 2:Stop bleeding. 3:Give water to drink.",
            "correctOpt": "firstOpt",
            "hint": "No hint available"
        },
        {
            "questionId":2,
            "questionPhrased": "In an historic drive through WWII France, name the never-before-captured French city secured by Red Diamond troops in late 1944..",
            "firstOpt": "Fontainbleau",
            "secondOpt": "Etampes",
            "thirdOpt": "Metz",
            "fourthOpt": "Verdun",
            "correctOpt": "thirdOpt",
            "hint": "gateway to the Siegfried Line"
        },
        {
            "questionId": 1,
            "questionPhrased": "What are the current yearly membership fees for the Society of the Fifth Division?",
            "firstOpt": "$112.56 after applied taxes",
            "secondOpt": "$50",
            "thirdOpt": "$41.00",
            "fourthOpt": "$15",
            "correctOpt": "fourthOpt",
            "hint": "No hint available"
        },
        {
            "questionId": 0,
            "questionPhrased": "Name the widely feared Civil War Major General who threatened an opposing General with the phrase '... if I have to storm your works, you may expect no quarter.'",
            "firstOpt": "Stephen G. Hicks",
            "secondOpt": "William Tecumseh Sherman",
            "thirdOpt": "Nathan Bedford Forest",
            "fourthOpt": "Stonewall Jackson",
            "correctOpt": "thirdOpt",
            "hint": "He experienced tactical defeat at the battle of Tupelo"
        }
    ];  
    

    myNumber: number = 0;
    isEndOfTest: boolean = false;    
    needNextQuestion: boolean = false;
    
    isValidFormSubmitted = false;
    answerSubmitted: string = "";
    //theQuestion: string = "Which of the following leaders popularized the quote: \"Leadership is intangible, and therefore no weapon ever designed can replace it.\"?"
    //theQuestion: string = this.questions[1].questionPhrased.toString();
    //theFirstOption: string = this.questions[this.myNumber++].questionPhrased.toString();

/*     theSecondOption: string = "Omar N. Bradley";
    theThirdOption: string = "Douglas MacArthur";
    theFourthOption: string = "William \'Bill\' Slim";
    theCorrectAnswer: string = "second";
    theHint: string = "This is the first hint"; */

    answerResponse: string = "";
    outputResponse: string = "";
    user: User = new User();
    
    onFormSubmit(form: NgForm) {
        this.isEndOfTest = false;
           if(this.myNumber==0){
              //this.myNumber = -1;
              this.isEndOfTest = false;
              //this.needNextQuestion = true; 
        }  

        if(this.needNextQuestion==true){
            this.resetForm(form);
            if(this.myNumber < 9){
                this.myNumber++;
                this.theQuestion = this.questions[this.myNumber].questionPhrased.toString();
                this.theFirstOption = this.questions[this.myNumber].firstOpt.toString();
                this.theSecondOption = this.questions[this.myNumber].secondOpt.toString();
                this.theThirdOption = this.questions[this.myNumber].thirdOpt.toString();
                this.theFourthOption = this.questions[this.myNumber].fourthOpt.toString();
                this.theCorrectAnswer = this.questions[this.myNumber].correctOpt.toString();
                this.theHint = this.questions[this.myNumber].hint.toString();
                this.answerSubmitted = "";
                this.needNextQuestion = false;                
            } else {
                this.isEndOfTest = true;
                this.myNumber = -1;
                this.needNextQuestion = true;
                //this.resetForm(form);
                
            }
        }
        this.isValidFormSubmitted = false;
        if(form.invalid){
           this.theSecondOption == "Form Invalid";
           return;
        }
        //this.theSecondOption = form.controls['selectedAnswer'].value;
        //this.isValidFormSubmitted = true;
        //this.user.userName = form.controls['uname'].value;
        this.user.selectedAnswer = form.controls['selectedAnswer'].value;
        
        if(form.controls['selectedAnswer'].value==this.theCorrectAnswer){
            this.theQuestion = this.questions[this.myNumber].questionPhrased.toString();
            // this.theSecondOption = "Hurrah";
            this.answerSubmitted = "Yes, correct answer!";
            this.needNextQuestion = true;
        } 
        else{
            // outputResponse
/*             if(this.theCorrectAnswer =="thirdOpt"){
                this.outputResponse = this.theThirdOption;
            } */
            switch(this.theCorrectAnswer) {
                case "firstOpt": {
                    this.outputResponse = this.theFirstOption;
                    break;
                }
                case "secondOpt": {
                    this.outputResponse = this.theSecondOption;
                    break;
                }
                case "thirdOpt": {
                    this.outputResponse = this.theThirdOption;
                    break;
                }
                case "fourthOpt": {
                    this.outputResponse = this.theFourthOption;
                    break;
                }
            }

            this.answerSubmitted = "Correct Answer: " +  this.outputResponse;
            // this.answerSubmitted = "Correct Answer: " + this.theCorrectAnswer+"ion: " + this.outputResponse;
            //this.answerSubmitted = "The correct answer is actually: " + form.controls['selectedAnswer'].value+"ion";
            this.needNextQuestion = true;
        }
        
        //this.user.isMarried = form.controls['married'].value;
        //this.user.isTCAccepted = form.controls['tc'].value;
        //this.userService.createUser(this.user);
        //this.resetForm(form);
     }
     resetForm(form: NgForm) {        
        this.user = new User();	
        form.resetForm({
            //married: false
        });	
     }
    /*
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    */
    
/*     _listFilter: string ;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products;
    } */
    

    
    theQuestion: string = this.questions[this.myNumber].questionPhrased.toString();
    theFirstOption: string = this.questions[this.myNumber].firstOpt.toString();
    theSecondOption: string = this.questions[this.myNumber].secondOpt.toString();
    theThirdOption: string = this.questions[this.myNumber].thirdOpt.toString();
    theFourthOption: string = this.questions[this.myNumber].fourthOpt.toString();
    theCorrectAnswer: string = this.questions[this.myNumber].correctOpt.toString();
    theHint: string = this.questions[this.myNumber].hint.toString(); 

/*     filteredProducts: IQuestion[];
    questions: IQuestion[] = [
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,         
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ]; */

/*     constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    } */

/*     performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    } */

/*     toggleImage(): void {
        this.showImage = !this.showImage;
    } */

    ngOnInit(): void {
        
        console.log('In OnInit');
    }
}