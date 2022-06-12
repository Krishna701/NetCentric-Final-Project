using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EGovProject.Models.ViewModel
{
    public class BirthModel
    {
        [Key]
        public int BirthId { get; set; }
        [Required]
        public string RegistrationNumber { get; set; }
        [Required]
        public string RegistrationDateNepali { get; set; }
        [Required]
        public string RegistrationDateEnglish{ get; set; }

        [Required]
        public string FNameNepali { get; set; }
        public string MNameNepali { get; set; }
        [Required]
        public string LNameNepali { get; set; }
        [Required]
        public string FNameEnglish { get; set; }
        public string MNameEnglish { get; set; }
        [Required]
        public string LNameEnglish { get; set; }
        public string BirthSite { get; set; }
        public string BirthType { get; set; }
        public string BirthHelper { get; set; }
        public string BabyWeight { get; set; }
        public string Caste { get; set; }
        public bool IsHandicapped { get; set; }
       
        public string HandiNepali { get; set; }
        public string HandiEnglish { get; set; }
        [Required]
      //  [Range(१९५०,२०७८ )]
        public string NDOBBSY { get; set; }
        [Required]
       // [Range(0१, १२)]
        public string NDOBBSM { get; set; }
        [Required]
       // [Range(0१, ३१)]
        public string NDOBBSD { get; set; }
        [Required]
        [Range(1900,2021)]
        public string EDOBBSY { get; set; }
        [Required]
        [Range(01, 12)]
        public string EDOBBSM { get; set; }
        [Required]
        [Range(01, 31)]
        public string EDOBBSD { get; set; }
        public string Gender { get; set; }
        public string Province { get; set; }

        public string District { get; set; }
        public string MuVdc { get; set; }
        public string Ward { get; set; }
        public string BirthPlaceNepali { get; set; }
        public string BirthPlaceEnglish { get; set; }
        public string MarriageRedNo { get; set; }
        
        public string MarriageDate { get; set; }
     
 

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
        public bool IsVerified { get; set; }

    }
}
