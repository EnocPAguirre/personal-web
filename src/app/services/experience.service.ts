import { Injectable } from '@angular/core';
import { work } from '../interfaces/work.interface';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private monex: work = {
    role: 'Systems Engineer',
    company: 'Monex',
    period: '10/2021 - Now',
    activities: [
      'Developed an Angular system to calculate Swaps instruments.',
      'Developed an admin system designed to create new instruments.',
      'Refactored Java projects improving complexity and implement design patterns.',
      'Majorly improved deployment times for the FX platform. Before it took 3 hours to deploy, after the improvement it takes 3 minutes.',
      'Created an Angular system to obtain Forwards points.',
      'Developed React components to manage roles for a derivatives systems.',
      "Created a generic pipeline to deploy all the Mulesoft's projects.",
    ],
  };

  private ait: work = {
    role: 'Full Stack Developer',
    company: 'AIT (Monex)',
    period: '01/2020 - 10/2021',
    activities: [
      'Java developer.',
      'Design of micro-services with Java using Murex APIS, developed in Spring.',
      'Created Oracle ORDS services. Developed an Angular system to calculate Caps instruments.',
      'Used Docker to deploy Angular systems. Used Docker to deploy React systems. Created pipelines to deploy applications.',
      'Created APIS with Mulesoft.',
      'Deployed APIS created in Mulesoft with Jenkins.',
      'Created declarative projects using a yaml file in openshift.',
      'Created Openshift pods.',
      'Deployed applications from repositories to Openshift.',
      'Created ImageStreams, buildConfigs and DeploymentConfigs in openshift.',
      'Created objects from templates in Openshift.',
      'Created Aura y LWC components for Salesforce applications.',
      'Migrate Angular components to React components for different systems in Monex.',
    ],
  };

  private neoris: work = {
    role: 'Full Stack Developer',
    company: 'Neoris (Telcel) ',
    period: '07/2019 - 01/2020',
    activities: [
      'Developed micro-services on Java with Spring Boot 5.',
      "Developed a log monitoring with Kibana, Logstash and Elasticsearch to know the applications' status.",
      "Developed a Python application using Django to show data about messages sent around the country through out the day.",
      "Developed a Java System intended for knowing clients' satisfaction. This system was used around all the Telcel support centers. It worked by generating message queues and micro-services.",
      "Developed an Angular application in charge of managing Telcel's subscriptions.",
      "Developed a React components for a system to get information about client's satisfaction."
    ],
  };

  private _works: work[] = [this.neoris, this.ait, this.monex];

  constructor() {}

  get works(){
    return [...this._works]
  }
}
