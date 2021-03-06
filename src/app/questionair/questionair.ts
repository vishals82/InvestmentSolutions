import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class Question {
    question: string;
    options: string[];
}

@Component({
    selector: 'app-questionair',
    templateUrl: './questionair.html',
    styles: [
        `
         .mat-raised-button {
             margin: 5px 5px;
         }
      `
    ]
})
export class QuestionairComponent {
    isLinear = false;
    // firstFormGroup: FormGroup;
    // secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    questions: Question[];
    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.questions = [{
            question: 'أنوي أن أبدأ بسحب استثماراتي خلال',
            options: [ 'أقل من 3 سنوات', 'من 3 إلى 5 سنوات', 'من ست إلى عشر سنوات', 'أكثر من 11 سنة']
        }, {
            question: 'ما هي المدة التي تتوقع أن تترك محفظتك مستثمرة من دون أن تسحب منها أي مبلغ لتلبية الإحتياجات الأساسية مثل تغطية مصاريف التقاعد أو شراء منزل أو سيارة؟',
            options: [ 'أقل من 2 سنة', 'من 2 إلى 5 سنوات', 'من 6 سنوات إلى 10 سنوات', '11 سنة او اكثر']
        }, {
            question: 'كيف تصف خبرتك في مجال الاستثمار و ارتياحك تجاه فكرة الاستثمار؟',
            options: ['لا يوجد خبرة و مستوى قليل من الارتياح', 'خبرة محدودة مع مستوى متوسط من الارتياح', 
            ' خبرة استثمارية متوسطة لعدة سنوات ومستوى جيد من الارتياح', 'خبرة كبيرة في الاستثمار و مستوى عالي من الارتياح']
        }, {
            question: 'كيف تتوقع أن يكون شعورك عندما تبدأ بالإستثمار؟',
            options: ['سوف أقلق كثيرا على استثماراتي', 
            'سوف أقلق نوعا ما على استثماراتي ولكن سأفكر بالأرباح التي يمكن أن أجنيها أيضا', 
            'أكثر ما سيهمني و سيشغل تفكيري هو الأرباح التي يمكن أن أجنيها من الاستثمار']
        }, {
            question: 'ما هي الاستثمارات التي تمتلكها اليوم؟',
            options: ['صكوك أو صناديق مستثمرة في الصكوك', 
            'أسهم أو صناديق تستثمر في الأسهم', 'أسهم عالمية أو صناديق عالمية']
        }, {
            question: 'تخيل في الثلاث أشهر الماضية , خسر سوق الأسهم 25% من قيمته وبالتالي نقصت قيمة استثماراتك بنسبة 25% , ماذا ستفعل؟',
            options: ['أبيع كل أسهمي', 'أبيع بعض أسهمي', 
            'لا أقوم بأي شي', 'أقوم بشراء المزيد من الأسهم']
        }, {
            question: 'في الاختيارات التالية, يرجى اختيار واحد من الخطط الإستثمارية الإفتراضية بما يتناسب مع طبيعتك ورغباتك',
            options: ['الخطة الأولى: متوسط عوائد سنوية في آخر خمس سنوات يبلغ 6.2% و عائد أفضل سنة يساوي 14.9% بينما عائد أسوأ سنة يبلغ 5.3-%',
             'الخطة الثانية: متوسط عوائد سنوية في آخر خمس سنوات يبلغ 8.6% و عائد أفضل سنة يبلغ 26.3% بينما عائد أسوأ سنة يبلغ 13.4-%', 
             'الخطة الثالثة: متوسط عوائد سنوية في آخر خمس سنوات يبلغ 11.3% و عائد أفضل سنة يبلغ 32.4% بينما عائد أسوأ سنة يبلغ 17.6-%',
              'الخطة الرابعة: متوسط عوائد سنوية في آخر خمس سنوات يبلغ 12.6% و عائد أفضل سنة يبلغ 41.6% و عائد أسوأ سنة يبلغ 25.3-% ',
            'الخطة الخامسة: متوسط عوائد سنوية في آخر خمس سنوات يبلغ 14.5% و عائد أفضل سنة يبلغ 48.7% و عائد أسوأ سنة يبلغ 31.2-%']
        }, {
            question: 'هل تريد الاستثمار في صناديق متوافقة مع الشريعة الإسلامية أم ترغب بالاستثمار في الصناديق الإعتيادية؟ ',
            options: ['صناديق متوافقة مع الشريعة الأسلامية', 'صناديق عادية ']
        }];

        // this.firstFormGroup = this._formBuilder.group({
        //     firstCtrl: ['', Validators.required]
        // });
        // this.secondFormGroup = this._formBuilder.group({
        //     secondCtrl: ['', Validators.required]
        // });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        });
    }
}
