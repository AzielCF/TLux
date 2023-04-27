# TLux - Framework CSS

TLux es un framework CSS altamente modular y fácil de usar escrito en Sass, que se enfoca en la recursividad y la simplicidad de uso. Su objetivo es proporcionar una base sólida para el diseño de sitios web y aplicaciones, con su propio enfoque único en cuanto a diseño y funcionalidad.

## Estructura de archivos

La estructura de archivos de TLux es fácil de entender y seguir. Las carpetas se organizan de manera lógica y específica, y se incluyen archivos de importación para diferentes componentes del framework.


- scss/
    - base/                      <!-- Reset de propiedades HTML -->
    - components/                <!-- Carpeta de componentes -->
    - elements/                  <!-- Carpeta de elementos -->
    - forms/                     <!-- Formularios -->
    - helpers/                   <!-- Los helpers se almacenan aquí -->
    - utilities/                 <!-- Utilities con mixins dentro -->
    - variables/                 <!-- Se modularizan las variables globales -->
    - vendor/                    <!-- Rfs de Bootstrap -->
    - tlux.scss                  <!-- Importación de Tlux -->
    - tlux-utilities.scss        <!-- Importación de Tlux (solo utilities) -->
    - tlux-grid.scss             <!-- Importación de Tlux (solo grid) -->


## Estado del proyecto
![Build Status](https://img.shields.io/badge/Status-Dev-red)

Actualmente, Tlux está en proceso de desarrollo. El grid, los formularios y los elementos están en proceso, mientras que las variables globales están en progreso. Los helpers y utilities están en un estado avanzado, pero aún necesitan ser organizados y añadidos al framework. Los componentes aún no han sido desarrollados, lo que significa que el trabajo en Tlux está en curso y que los usuarios pueden esperar nuevas actualizaciones y mejoras en el futuro.

### Cosas por hacer y cosas listas:
- Grid - en proceso
- Formularios - en proceso (falta organizar)
- Elements - en proceso
- Utilities - proceso avanzado (faltan añadir y organizar)
- Variables - proceso progresivo
- Componenres - sin empezar
- Base - culminada

## Contribución

Si deseas contribuir a Tlux, te invitamos a hacerlo a través de pull requests en GitHub. Tu ayuda es muy apreciada y nos ayudará a hacer crecer este proyecto.

## Licencia [![License](https://img.shields.io/github/license/AzielCF/TLux?logo=github)](https://github.com/AzielCF/TLux/blob/master/LICENSE)


Tlux se distribuye bajo la licencia MIT, lo que significa que es de uso libre y gratuito para cualquier proyecto. Para más información, consulta el archivo `LICENSE` incluido en este repositorio.