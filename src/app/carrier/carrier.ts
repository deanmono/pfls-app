import { Program } from './program/program';

export class Carrier {
	id: number;
	name: string;
	programContactName:string;
	programContactEmail:string;
	programContactPhone:string;
	technicalContactName:string;
	technicalContactEmail:string;
	technicalContactPhone:string;
	algorithmProvided:boolean;
	algorithmName:string;
	algorithmType:string;
	programs: Program[];
}
