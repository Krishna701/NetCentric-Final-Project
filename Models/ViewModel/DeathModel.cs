using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EGovProject.Models.ViewModel
{
    public class DeathModel
    {
        [Key]
        public int DeathId { get; set; }
        [Required]
        public string RegistrationNumber { get; set; }
        [Required]
        public string RegistrationDateNepali { get; set; }
        [Required]
        public string RegistrationDateEnglish { get; set; }
        public int IdentityNo { get; set; }
        public string DProvince { get; set; }

        public string DVDC { get; set; }

        public string DDistrict { get; set; }
        public string DWard { get; set; }
        public string DCtznNo { get; set; }
        public string Dctzdistrict { get; set; }
        public string EDeathDate { get; set; }
        public string NDeathDate { get; set; }
        public string DeathDateReg { get; set; }
        public string DeathPlace { get; set; }
        public string DeathReason { get; set; }
        public bool IsMarried { get; set; }
        public bool IsVerified { get; set; }
        public string DReport { get; set; }

        public string DWFullNameEnglish { get; set; }
        public string DWFullNameNepali { get; set; }
        public string WNameFEnglish { get; set; }
        public string WNameMEnglish { get; set; }
        public string WNameSEnglish { get; set; }
        public string WNameFNepali { get; set; }
        public string WNameMNepali { get; set; }
        public string WNameSNepali { get; set; }

        public string ApplicantFNepali { get; set; }
        public string ApplicantMNepali { get; set; }
        public string ApplicantLNepali { get; set; }
        public string ApplicantFEnglish { get; set; }
        public string ApplicantMEnglish { get; set; }
        public string ApplicantLEnglish { get; set; }
        public string AppRelation { get; set; }
        public string ApplicantDistrict { get; set; }
        public string Applicantvdcmu { get; set; }
        public string Applicantward { get; set; }
        public string Applicantctznum { get; set; }
        public string Applicantctzdistrict { get; set; }
        public string Applicantctzdate { get; set; }
        public string Caste { get; set; }
        public string NDOBBSY { get; set; }
        public string NDOBBSM { get; set; }
        public string NDOBBSD { get; set; }
        [Required]
        [Range(1900, 2021)]
        public string EDOBBSY { get; set; }
        [Required]
        [Range(01, 12)]
        public string EDOBBSM { get; set; }
        [Required]
        [Range(01, 31)]
        public string EDOBBSD { get; set; }
        public string FNameNepali { get; set; }
        public string MNameNepali { get; set; }
        public string LNameNepali { get; set; }
        public string FNameEnglish { get; set; }
        public string MNameEnglish { get; set; }
        public string LNameEnglish { get; set; }
  
        public string CitzNo { get; set; }
     
    


     
        public string Gender { get; set; }

        public string GFFNepali { get; set; }

        public string GFFEnglish { get; set; }
        public string GFMNepali { get; set; }
        public string GFMEnglish { get; set; }
        public string GFLNepali { get; set; }
        public string GFLEnglish { get; set; }
        public string FatherFNepali { get; set; }
        public string FatherFEnglish { get; set; }
        public string FatherMNepali { get; set; }
        public string FatherMEnglish { get; set; }
        public string FatherLNepali { get; set; }
        public string FatherLEnglish { get; set; }
        public string FatherDistrict { get; set; }
        public string Fathervdcmu { get; set; }
        public string Fatherward { get; set; }
        public string Fatherctznum { get; set; }
        public string Fatherctzdistrict { get; set; }
        public string Fatherctzdate { get; set; }
        public string MotherFNepali { get; set; }
        public string MotherFEnglish { get; set; }
        public string MotherMNepali { get; set; }
        public string MotherMEnglish { get; set; }
        public string MotherLNepali { get; set; }
        public string MotherLEnglish { get; set; }
        public string MotherDistrict { get; set; }
        public string Mothervdcmu { get; set; }
        public string Motherward { get; set; }
        public string Motherctznum { get; set; }
        public string Motherctzdistrict { get; set; }
        public string Motherctzdate { get; set; }
     
      
        public string Formdate { get; set; }
        [EmailAddress]
        public string PhoneNo { get; set; }
        public string remark { get; set; }
        [Required]
        public string RFNameNepali { get; set; }
        public string RMNameNepali { get; set; }
        [Required]
        public string RLNameNepali { get; set; }
        [Required]
        public string RFNameEnglish { get; set; }
        public string RMNameEnglish { get; set; }
        [Required]
        public string RLNameEnglish { get; set; }
        public bool IsRegistered { get; set; }

    }
}
