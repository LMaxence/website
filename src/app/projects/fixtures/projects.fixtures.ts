/* eslint-disable max-len */
import { Project } from '../models/project.model';
import goRayTracer from './go-ray-tracer';
import nestStarter from './nest-starter';
import opiwatch from './opiwatch';
import website from './website';
import mookme from './mookme';

export const projects: Project[] = [mookme, opiwatch, website, goRayTracer, nestStarter];
