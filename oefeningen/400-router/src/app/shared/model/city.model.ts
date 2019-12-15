// city.model.ts
export class City {
	constructor(public id:number,
				public fqdn:string,
				public description:string,
				public active:number,
				public created: number,
				public modified:Date {
	}
}
a

"id" INTEGER PRIMARY KEY  NOT NULL ,
    "fqdn" varchar(250) NOT NULL,
    "type" text  NOT NULL DEFAULT 'local',
    "description" varchar(250) DEFAULT NULL,
    "active" tinyint(1) NOT NULL DEFAULT '0',
    "created" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" timestamp NULL DEFAULT NULL