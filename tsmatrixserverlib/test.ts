
import { asTimeStamp } from "./timestamp";
import {baseEncoding} from "./base64";
import {baseDecoding} from "./base64";
import {signJson} from "./signing";
let myValidator = asTimeStamp("2009 02 13 23:31:30");
let myValidator1 = baseEncoding("this\xffis\xffa\xfftest");
let myValidator2 = baseDecoding("dGhpc8O/aXPDv2HDv3Rlc3Q=");
