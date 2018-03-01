import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import { Person } from './person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: Person[] = [
  {
    name: 'Fady Sameh',
    about: 'Loves football and coding',
    imagePath: 'assets/fady.jpg'
  },
  {
    name: 'Abdelrahman Tarek',
    about: 'I love running, I love food.',
    imagePath: 'assets/abdo.jpg'
  },
      {
          name: 'Zeyad Zaky',
          about: '☕, 💻, 💤,  🔁',
          imagePath: 'assets/zeyad.jpg'
      },
      {
          name: 'Anwar Labib',
          about: 'Lives to code',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Bishoy Farid',
          about: 'Books, Coding',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'AHMED Samir Morsy',
          about: 'Fifa(PS4) , gaming ,Unity',
          imagePath: 'assets/morsy.jpg'
      },
      {
          name: 'Peter Agayby',
          about: 'How you doin?',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Maggie Ezzat',
          about: 'I love pizza!',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Mohamed Hesham',
          about: 'Winter is Coming❄',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Youssef Salah',
          about: 'consistency',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Doaa Samer',
          about: 'Memes ❤️',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Omar Elmoghazy',
          about: 'P.T. Barnum',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Mostafa Amer',
          about: 'Canada ❤️',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Shadi Barghash',
          about: 'Software Engineering, Music, Aviation, Horses <3',
          imagePath: 'assets/Shadi.png'
      },
      {
          name: 'Marwan abdulgawad',
          about: 'i love FRIENDS series',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Aya Waleed',
          about: 'Friends❤️',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Daniel Ashraf',
          about: 'life',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Mariz Awad',
          about: 'gotta git git git',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Amr Saadi',
          about: 'SE <3',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Marwan Sami Youssef',
          about: 'No SE it\'s only House and Techno',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Badr mahmoud',
          about: 'mat5alasooona b2a min el hisa dee',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Ahmed Gamal Farag',
          about: 'git0',
          imagePath: 'assets/T15-logo.png'
      },
      {
          name: 'Abdelaziz Ashraf Ragab',
          about: 'se project',
          imagePath: 'assets/T15-logo.png'
      },
  ];

  constructor() { }

  ngOnInit() {
  }

}
