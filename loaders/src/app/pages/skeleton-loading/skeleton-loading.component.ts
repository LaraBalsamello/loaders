import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-loading',
  templateUrl: './skeleton-loading.component.html',
  styleUrls: ['./skeleton-loading.component.scss']
})
export class SkeletonLoadingComponent implements OnInit {

  objectTD = [];
  lorem;
  ipsum;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.lorem = "Lorem ipsum dolor sit amet," +
      "consectetur adipisicing elit." +
      "Ipsa perferendis et asperiores" + 
      "repellendus consectetur debitis" + 
      "excepturi fugiat saepe optio" + 
      "aspernatur hic, vero veniam ab," + 
      "officiis, itaque eveniet voluptatem" + 
      "cumque molestiae?" +
      "Lorem ipsum dolor sit amet," +
      "consectetur adipisicing elit." +
      "Ipsa perferendis et asperiores" + 
      "repellendus consectetur debitis" + 
      "excepturi fugiat saepe optio" + 
      "aspernatur hic, vero veniam ab," + 
      "officiis, itaque eveniet voluptatem" + 
      "cumque molestiae?"
      this.ipsum = "Lorem ipsum dolor sit, amet" +
      "consectetur adipisicing elit." +
      "Sit, saepe. Dicta autem" +
      "accusantium suscipit harum," +
      "voluptatum, cumque numquam" +
      "omnis adipisci saepe, blanditiis incidunt?" +
      "Fugit dignissimos rem unde ipsam illo id." +
      "Lorem ipsum dolor sit, amet" +
      "consectetur adipisicing elit." +
      "Sit, saepe. Dicta autem" +
      "accusantium suscipit harum," +
      "voluptatum, cumque numquam" +
      "omnis adipisci saepe, blanditiis incidunt?" +
      "Fugit dignissimos rem unde ipsam illo id."
      this.objectTD = [ [{ title: "Name", value: "Roberto" },
      { title: "Surname", value: "González" },
      { title: "City", value: "BS AS" },
      { title: "Country", value: "ARG" }],
      [{ title: "Name", value: "María" },
      { title: "Surname", value: "González" },
      { title: "City", value: "BS AS" },
      { title: "Country", value: "ARG" }],
      [{ title: "Name", value: "Marta" },
      { title: "Surname", value: "Mendez" },
      { title: "City", value: "BS AS" },
      { title: "Country", value: "ARG" }],
      [{ title: "Name", value: "Serena" },
      { title: "Surname", value: "Williams" },
      { title: "City", value: "BS AS" },
      { title: "Country", value: "ARG" }],
      [{ title: "Name", value: "José" },
      { title: "Surname", value: "Martinez" },
      { title: "City", value: "BS AS" },
      { title: "Country", value: "ARG" }],
      [{ title: "Name", value: "Susana" },
      { title: "Surname", value: "Gimenez" },
      { title: "City", value: "BS AS" },
      { title: "Country", value: "ARG" }],
      ];
    }, 3000);
  }

}
