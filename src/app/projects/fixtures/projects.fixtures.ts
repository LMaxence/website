/* eslint-disable max-len */
import { Project } from '../models/project.model';
import goRayTracer from './go-ray-tracer';
import nestStarter from './nest-starter';
import opiwatch from './opiwatch';
import website from './website';

export const projects: Project[] = [opiwatch, website, goRayTracer, nestStarter];
