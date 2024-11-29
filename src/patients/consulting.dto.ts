// consulting.dto.ts
export class ConsultingDto {
    consultingId: number;
    // Include only necessary fields
    patientId: number;
    status: string;
  
    visualAcuityFarPresentingLeft: number;
  
    visualAcuityFarPresentingRight: number;
  
    visualAcuityFarPinholeRight: number;
 
    visualAcuityFarPinholeLeft: number;
  
   
    visualAcuityFarBestCorrectedLeft: number;
  
    visualAcuityFarBestCorrectedRight: number;
  
    visualAcuityNearLeft: number;
  
    visualAcuityNearRight: number;
  }