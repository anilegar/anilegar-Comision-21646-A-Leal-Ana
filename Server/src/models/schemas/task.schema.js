import { body } from "express-validator";

export const createTaskSchema = [
    body('title')
        .isString().withMessage('Debe Ser un String')
        .notEmpty().withMessage('No debe estar vacio'),
    body('description')
        .isString().withMessage('Debe Ser un String')
        .notEmpty().withMessage('No debe estar vacio'),
    body('poster')
        .isString().withMessage('Debe Ser un String')
        .notEmpty().withMessage('No debe estar vacio'),
]

export const editTaskSchema = [
    body('title')
        .optional()
        .isString().withMessage('Debe Ser un String')
        .notEmpty().withMessage('No debe estar vacio'),
    body('description')
        .optional()
        .isString().withMessage('Debe Ser un String')
        .notEmpty().withMessage('No debe estar vacio'),
    body('poster')
        .optional()
        .isString().withMessage('Debe Ser un String')
        .notEmpty().withMessage('No debe estar vacio'),
]