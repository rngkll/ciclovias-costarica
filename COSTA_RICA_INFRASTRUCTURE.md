# Infrastructure and Cycling in Costa Rica (Ciclovías)

This document summarizes the current state of bicycle infrastructure, legal frameworks, and digital data sources in Costa Rica.

## 1. Existing Infrastructure

### Gran Área Metropolitana (GAM)
The GAM contains the most significant urban cycling infrastructure in the country, though it remains fragmented.

*   **San José - Montes de Oca - Curridabat:** This is the most developed axis, connecting several universities (UCR, UNED) and residential areas.
*   **Cartago:** Widely considered the national leader in cycling mobility. It features a well-integrated network that connects the city center with the Technological Institute of Costa Rica (TEC) and surrounding neighborhoods.
*   **Heredia & Alajuela:** Both cities have implemented initial "ciclovías" and "ciclovías recreativas," though coverage is less extensive than in San José or Cartago.

### Coastal and Provincial Routes
*   **Limón (Puerto Viejo):** A high density of bicycle use for both tourism and local transport, although dedicated infrastructure is limited to specific segments.
*   **Guanacaste (Nosara, Las Catalinas):** Notable for private and community-led initiatives providing safe cycling trails and paths, primarily for recreation and tourism.

## 2. Digital Data Sources

### SNIT (Sistema Nacional de Información Territorial)
The official source for GIS layers in Costa Rica. Managed by the IGN (Instituto Geográfico Nacional).

*   **Portal:** [snitcr.go.cr](https://www.snitcr.go.cr/)
*   **WMS/WFS Endpoints:** Typically found under the nodes for:
    *   **MOPT** (Ministerio de Obras Públicas y Transportes)
    *   **CTP** (Consejo de Transporte Público)
    *   **Municipalities** (specifically San José and Cartago)
*   **Technical Note:** To extract GeoJSON/KML data, one can use the WFS (Web Feature Service) capabilities of the SNIT nodes.

### OpenStreetMap (OSM)
Often more up-to-date than official sources due to community contributions.
*   **Tagging:** Infrastructure is typically tagged with `highway=cycleway` or `cycleway:right/left=lane/track`.
*   **Visualization:** Tools like [CyclOSM](https://www.cyclosm.org/) provide the best visual representation of the OSM data for Costa Rica.

## 3. Legal Framework: Ley 9660

**Ley de Movilidad y Seguridad Ciclista (2019)**
This law represents a significant milestone for cycling in Costa Rica. Key provisions include:

*   **Mandatory Infrastructure:** All new national and municipal road projects must evaluate and, where feasible, include cycling infrastructure.
*   **Cyclists' Rights:** Establishes the right of cyclists to occupy a full lane for safety and mandates a 1.5-meter distance for motor vehicles when overtaking.
*   **Bike Parking:** Requires public and private buildings with high public influx to provide secure bicycle parking spaces.
*   **Education:** Mandates the inclusion of cycling safety and mobility topics in driver's license exams and school curricula.

## 4. Advocacy and Community Groups

These organizations are key players in the development and promotion of cycling in Costa Rica:

| Name | Main Location | Webpage / Site | Focus |
| :--- | :--- | :--- | :--- |
| **ACONVIVIR** | San José | [aconvivir.org](https://www.aconvivir.org/) | Road safety, legal rights, and advocacy. |
| **BiciBus.cr** | San José / GAM | [bicibus.cr](https://bicibus.cr/) | Commuting logistics and urban rider training. |
| **CPSU** | San José | [cpsurbana.org](https://cpsurbana.org/) | Technical research on sustainable mobility. |
| **Chepecletas** | San José | [chepecletas.com](https://www.chepecletas.com/) | Urban tours and public space reclamation. |
| **Las Luciérnagas** | San José / GAM | [FB Group](https://www.facebook.com/groups/luciernagascr/) | Night rides and cycling visibility. |
| **Bici-Alajuela** | Alajuela | [FB Page](https://www.facebook.com/bicialajuela/) | Local advocacy and community rides in Alajuela. |
| **Ciclovía Cartago** | Cartago | [FB Page](https://www.facebook.com/CicloviaCartago/) | Support for the Cartago municipal network. |

### Local & Regional Collectives
*   **Ciclismo Urbano Costa Rica:** Large digital community for daily commuters.
*   **Ciclistas Urbanos de Alajuela:** Collaborative group working on open data and mobility projects.
*   **Tuercas Costa Rica:** Pioneer recreational group in the Cartago province.

## 5. Current Challenges

*   **Network Fragmentation:** The lack of connectivity between different municipal "ciclovías" prevents the creation of a truly functional metropolitan network.
*   **Road Safety Culture:** Despite Ley 9660, compliance with the 1.5-meter rule and general respect for cyclists remains a significant challenge.
*   **Topography and Climate:** While often cited as barriers, the main challenges remain infrastructure design and the "last mile" connectivity with public transport (trains and buses).
*   **Maintenance:** Many existing segments suffer from poor maintenance, lack of clear signage, and inadequate lighting.
