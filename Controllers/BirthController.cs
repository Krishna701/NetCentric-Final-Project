using EGovProject.Models;
using EGovProject.Models.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MimeKit;
using MailKit.Net.Smtp;

namespace EGovProject.Controllers
{
    public class BirthController : Controller
    {
        private EgovernanceDB context;
        public BirthController(EgovernanceDB _context)
        {
            context = _context;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Create()
        {
            return View(new BirthModel());
        }
        [HttpPost]


        public IActionResult Create(BirthModel birth)
        {
            BirthModel row = new BirthModel();
            row.BirthId = birth.BirthId;
            row.RegistrationNumber = birth.RegistrationNumber;
            row.RegistrationDateNepali = birth.RegistrationDateNepali;
            row.RegistrationDateEnglish = birth.RegistrationDateEnglish;
            row.FNameNepali = birth.FNameNepali;
            row.FNameEnglish = birth.FNameEnglish;
            row.MNameNepali = birth.MNameNepali;
            row.MNameEnglish = birth.MNameEnglish;
            row.LNameNepali = birth.LNameNepali;
            row.LNameEnglish = birth.LNameEnglish;
            //row.RFNameNepali = birth.RFNameNepali;
            //row.RFNameEnglish = birth.RFNameEnglish;
            //row.RMNameNepali = birth.RMNameNepali;
            //row.RMNameEnglish = birth.RMNameEnglish;
            //row.RLNameNepali = birth.RLNameNepali;
            //row.RLNameEnglish = birth.RLNameEnglish;
            row.RFNameNepali = "अस्मिता";
            row.RFNameEnglish = "Asmita";
            row.RMNameNepali = "";
            row.RMNameEnglish = "";
            row.RLNameNepali = "श्रेष्ठ";
            row.RLNameEnglish = "Shrestha";
            row.BirthSite = birth.BirthSite;
            row.BirthType = birth.BirthType;
            row.Caste = birth.Caste;
            row.Province = birth.Province;
            row.MuVdc = birth.MuVdc;
            row.District = birth.District;
            row.Ward = birth.Ward;
            row.NDOBBSY = birth.NDOBBSY;
            row.NDOBBSM = birth.NDOBBSM;
            row.NDOBBSD = birth.NDOBBSD;
            row.EDOBBSY = birth.EDOBBSY;
            row.EDOBBSM = birth.EDOBBSM;
            row.EDOBBSD = birth.EDOBBSD;
            row.IsHandicapped = birth.IsHandicapped;
            row.HandiNepali = birth.HandiNepali;
            row.HandiEnglish = birth.HandiEnglish;
            row.Gender = birth.Gender;
            row.BirthPlaceNepali = birth.BirthPlaceNepali;
            row.BirthPlaceEnglish = birth.BirthPlaceEnglish;
            row.MarriageRedNo = birth.MarriageRedNo;
            row.MarriageDate = birth.MarriageDate;
            row.GFFNepali = birth.GFFNepali;
            row.GFFEnglish = birth.GFFEnglish;
            row.GFMNepali = birth.GFMNepali;
            row.GFMEnglish = birth.GFMEnglish;
            row.GFLNepali = birth.GFLNepali;
            row.GFLEnglish = birth.GFLEnglish;
            row.FatherFNepali = birth.FatherFNepali;
            row.FatherFEnglish = birth.FatherFEnglish;
            row.FatherMNepali = birth.FatherMNepali;
            row.FatherMEnglish = birth.FatherMEnglish;
            row.FatherLNepali = birth.FatherLNepali;
            row.FatherLEnglish = birth.FatherLEnglish;
            row.FatherDistrict = birth.FatherDistrict;
            row.Fathervdcmu = birth.Fathervdcmu;
            row.Fatherctznum = birth.Fatherctznum;
            row.Fatherctzdistrict = birth.Fatherctzdistrict;
            row.Fatherctzdate = birth.Fatherctzdate;
            row.MotherFNepali = birth.MotherFNepali;
            row.MotherFEnglish = birth.MotherFEnglish;
            row.MotherMNepali = birth.MotherMNepali;
            row.MotherMEnglish = birth.MotherMEnglish;
            row.MotherLNepali = birth.MotherLNepali;
            row.MotherLEnglish = birth.MotherLEnglish;
            row.MotherDistrict = birth.MotherDistrict;
            row.Mothervdcmu = birth.Mothervdcmu;
            row.Motherctznum = birth.Motherctznum;
            row.Motherctzdistrict = birth.Motherctzdistrict;
            row.Motherctzdate = birth.Motherctzdate;
            row.ApplicantFNepali = birth.ApplicantFNepali;
            row.ApplicantFEnglish = birth.ApplicantFEnglish;
            row.ApplicantMNepali = birth.ApplicantMNepali;
            row.ApplicantMEnglish = birth.ApplicantMEnglish;
            row.ApplicantLNepali = birth.ApplicantLNepali;
            row.ApplicantLEnglish = birth.ApplicantLEnglish;
            row.ApplicantDistrict = birth.ApplicantDistrict;
            row.Applicantvdcmu = birth.Applicantvdcmu;
            row.Applicantctznum = birth.Applicantctznum;
            row.Applicantctzdistrict = birth.Applicantctzdistrict;
            row.Applicantctzdate = birth.Applicantctzdate;
            row.AppRelation = birth.AppRelation;
            row.Formdate = birth.Formdate;
            row.PhoneNo = birth.PhoneNo;
            row.remark = birth.remark;
            row.IsVerified = false;
            context.Entry(row).State = EntityState.Added;
            context.SaveChanges();
            context.SaveChanges();



            using (var client = new SmtpClient())
            {
                client.Connect("smtp.gmail.com");
                client.Authenticate("armantiwari1123@gmail.com", "Armantiwari1123@*");
                var bodyBuilder = new BodyBuilder
                {
                    HtmlBody = $"<p><b>Dear {birth.ApplicantFEnglish}{birth.ApplicantMEnglish}{birth.ApplicantLEnglish}</b></p>" +
                  
                     $"<p>This is <b>MandanDeupur Nagarpalika </b>.We have received your details for birth Certification.</p>" +
                   $"<p>Here is your registered no. through which you can download your birth Certificate</p>" +
                    $"<p>Registration Number:{birth.RegistrationNumber}</p>",
                    TextBody = "{birth.RegistrationNumber}"

                };
                var message = new MimeMessage
                {
                    Body = bodyBuilder.ToMessageBody()

                };
                message.From.Add(new MailboxAddress("MandanDeupur.com", "armantiwari1123@gmail.com"));
                message.To.Add(new MailboxAddress(birth.PhoneNo));
                message.Subject = "Data Submitted Successfuly!!";
                client.Send(message);
                client.Disconnect(true);
            }
            //TempData["Message"] = "Thank you for your query.We will contact you soon!!!";



            return RedirectToAction("index");
        }



     
        public IActionResult Edit(int birthId)
        {
            BirthModel birthDisplay = context.BirthModel.Where(x => x.BirthId == birthId).Select(x => new BirthModel()

            {
                BirthId = x.BirthId,
                RegistrationNumber = x.RegistrationNumber,
                RegistrationDateNepali = x.RegistrationDateNepali,
                RegistrationDateEnglish = x.RegistrationDateEnglish,
                FNameNepali = x.FNameNepali,
                FNameEnglish = x.FNameEnglish,
                MNameNepali = x.MNameNepali,
                MNameEnglish = x.MNameEnglish,
                LNameNepali = x.LNameNepali,
                LNameEnglish = x.LNameEnglish,
                RFNameNepali = x.RFNameNepali,
                RFNameEnglish = x.RFNameEnglish,
                RMNameNepali = x.RMNameNepali,
                RMNameEnglish = x.RMNameEnglish,
                RLNameNepali = x.RLNameNepali,
                RLNameEnglish = x.RLNameEnglish,

                BirthSite = x.BirthSite,
                BirthType = x.BirthType,
                Caste = x.Caste,
                BirthHelper = x.BirthHelper,
                NDOBBSY = x.NDOBBSY,
                NDOBBSM = x.NDOBBSM,
                NDOBBSD = x.NDOBBSD,
                EDOBBSY = x.EDOBBSY,
                EDOBBSM = x.EDOBBSM,
                EDOBBSD = x.EDOBBSD,
                Ward=x.Ward,
                Province=x.Province,
                MuVdc=x.MuVdc,
                District=x.District,
                IsHandicapped = x.IsHandicapped,
                HandiNepali = x.HandiNepali,
                HandiEnglish = x.HandiEnglish,
                Gender = x.Gender,
                BirthPlaceNepali = x.BirthPlaceNepali,
                BirthPlaceEnglish = x.BirthPlaceEnglish,
                MarriageRedNo = x.MarriageRedNo,
                MarriageDate = x.MarriageDate,
                GFFNepali = x.GFFNepali,
                GFFEnglish = x.GFFEnglish,
                GFMNepali = x.GFMNepali,
                GFMEnglish = x.GFMEnglish,
                GFLNepali = x.GFLNepali,
                GFLEnglish = x.GFLEnglish,

                FatherFNepali = x.FatherFNepali,
                FatherFEnglish = x.FatherFEnglish,
                FatherMNepali = x.FatherMNepali,
                FatherMEnglish = x.FatherMEnglish,
                FatherLNepali = x.FatherLNepali,
                FatherLEnglish = x.FatherLEnglish,
                FatherDistrict = x.FatherDistrict,
                Fathervdcmu = x.Fathervdcmu,
                Fatherctznum = x.Fatherctznum,
                Fatherctzdistrict = x.Fatherctzdistrict,
                Fatherctzdate = x.Fatherctzdate,
                MotherFNepali = x.MotherFNepali,
                MotherFEnglish = x.MotherFEnglish,
                MotherMNepali = x.MotherMNepali,
                MotherMEnglish = x.MotherMEnglish,
                MotherLNepali = x.MotherLNepali,
                MotherLEnglish = x.MotherLEnglish,
                MotherDistrict = x.MotherDistrict,
                Mothervdcmu = x.Mothervdcmu,
                Motherctznum = x.Motherctznum,
                Motherctzdistrict = x.Motherctzdistrict,
                Motherctzdate = x.Motherctzdate,
                ApplicantFNepali = x.ApplicantFNepali,
                ApplicantFEnglish = x.ApplicantFEnglish,
                ApplicantMNepali = x.ApplicantMNepali,
                ApplicantMEnglish = x.ApplicantMEnglish,
                ApplicantLNepali = x.ApplicantLNepali,
                ApplicantLEnglish = x.ApplicantLEnglish,
                ApplicantDistrict = x.ApplicantDistrict,
                Applicantvdcmu = x.Applicantvdcmu,
                Applicantctznum = x.Applicantctznum,
                Applicantctzdistrict = x.Applicantctzdistrict,
                Applicantctzdate = x.Applicantctzdate,
                AppRelation = x.AppRelation,
                Formdate = x.Formdate,
                PhoneNo = x.PhoneNo,
                remark = x.remark,
                IsVerified=x.IsVerified

            }).FirstOrDefault();

            return View(birthDisplay);
        }
        [HttpPost]


        public IActionResult Edit(BirthModel birth)
        {
            BirthModel row = new BirthModel();
            row.BirthId = birth.BirthId;
            row.RegistrationNumber = birth.RegistrationNumber;
            row.RegistrationDateNepali = birth.RegistrationDateNepali;
            row.RegistrationDateEnglish = birth.RegistrationDateEnglish;
            row.FNameNepali = birth.FNameNepali;
            row.FNameEnglish = birth.FNameEnglish;
            row.MNameNepali = birth.MNameNepali;
            row.MNameEnglish = birth.MNameEnglish;
            row.LNameNepali = birth.LNameNepali;
            row.LNameEnglish = birth.LNameEnglish;
           row.RFNameNepali = birth.RFNameNepali;
           row.RFNameEnglish = birth.RFNameEnglish;
           row.RMNameNepali = birth.RMNameNepali;
            row.RMNameEnglish = birth.RMNameEnglish;
          row.RLNameNepali = birth.RLNameNepali;
           row.RLNameEnglish = birth.RLNameEnglish;


            //row.RFNameNepali = "अस्मिता";
            //row.RFNameEnglish = "Asmita";
            //row.RMNameNepali = "";
            //row.RMNameEnglish ="";
            //row.RLNameNepali ="श्रेष्ठ";
            //row.RLNameEnglish = "Shrestha";

            row.Province = birth.Province;
            row.District = birth.District;
            row.Ward = birth.Ward;
         
            row.MuVdc = birth.MuVdc;

            row.BirthSite = birth.BirthSite;
            row.BirthType = birth.BirthType;
            row.Caste = birth.Caste;
            row.NDOBBSY = birth.NDOBBSY;
            row.NDOBBSM = birth.NDOBBSM;
            row.NDOBBSD = birth.NDOBBSD;
            row.EDOBBSY = birth.EDOBBSY;
            row.EDOBBSM = birth.EDOBBSM;
            row.EDOBBSD = birth.EDOBBSD;
            row.IsHandicapped = birth.IsHandicapped;
            row.HandiNepali = birth.HandiNepali;
            row.HandiEnglish = birth.HandiEnglish;
            row.Gender = birth.Gender;
            row.BirthPlaceNepali = birth.BirthPlaceNepali;
            row.BirthPlaceEnglish = birth.BirthPlaceEnglish;
            row.MarriageRedNo = birth.MarriageRedNo;
            row.MarriageDate = birth.MarriageDate;
            row.GFFNepali = birth.GFFNepali;
            row.GFFEnglish = birth.GFFEnglish;
            row.GFMNepali = birth.GFMNepali;
            row.GFMEnglish = birth.GFMEnglish;
            row.GFLNepali = birth.GFLNepali;
            row.GFLEnglish = birth.GFLEnglish;
            row.FatherFNepali = birth.FatherFNepali;
            row.FatherFEnglish = birth.FatherFEnglish;
            row.FatherMNepali = birth.FatherMNepali;
            row.FatherMEnglish = birth.FatherMEnglish;
            row.FatherLNepali = birth.FatherLNepali;
            row.FatherLEnglish = birth.FatherLEnglish;
            row.FatherDistrict = birth.FatherDistrict;
            row.Fathervdcmu = birth.Fathervdcmu;
            row.Fatherctznum = birth.Fatherctznum;
            row.Fatherctzdistrict = birth.Fatherctzdistrict;
            row.Fatherctzdate = birth.Fatherctzdate;
            row.MotherFNepali = birth.MotherFNepali;
            row.MotherFEnglish = birth.MotherFEnglish;
            row.MotherMNepali = birth.MotherMNepali;
            row.MotherMEnglish = birth.MotherMEnglish;
            row.MotherLNepali = birth.MotherLNepali;
            row.MotherLEnglish = birth.MotherLEnglish;
            row.MotherDistrict = birth.MotherDistrict;
            row.Mothervdcmu = birth.Mothervdcmu;
            row.Motherctznum = birth.Motherctznum;
            row.Motherctzdistrict = birth.Motherctzdistrict;
            row.Motherctzdate = birth.Motherctzdate;
            row.ApplicantFNepali = birth.ApplicantFNepali;
            row.ApplicantFEnglish = birth.ApplicantFEnglish;
            row.ApplicantMNepali = birth.ApplicantMNepali;
            row.ApplicantMEnglish = birth.ApplicantMEnglish;
            row.ApplicantLNepali = birth.ApplicantLNepali;
            row.ApplicantLEnglish = birth.ApplicantLEnglish;
            row.ApplicantDistrict = birth.ApplicantDistrict;
            row.Applicantvdcmu = birth.Applicantvdcmu;
            row.Applicantctznum = birth.Applicantctznum;
            row.Applicantctzdistrict = birth.Applicantctzdistrict;
            row.Applicantctzdate = birth.Applicantctzdate;
            row.AppRelation = birth.AppRelation;
            row.Formdate = birth.Formdate;
            row.PhoneNo = birth.PhoneNo;
            row.remark = birth.remark;
            row.IsVerified =birth.IsVerified;

            context.Attach(row);
            context.Entry(row).State = EntityState.Modified;
            context.SaveChanges();
            return RedirectToAction("list");


        }





        //public IActionResult Delete(string registrationNumber)
        //{
        //    BirthModel birthDisplay = context.BirthModel.Where(x => x.RegistrationNumber == registrationNumber).Select(x => new BirthModel()

        //    {
        //        BirthId = x.BirthId,
        //        RegistrationNumber = x.RegistrationNumber,
        //        RegistrationDateNepali = x.RegistrationDateNepali,
        //        RegistrationDateEnglish = x.RegistrationDateEnglish,
        //        FNameNepali = x.FNameNepali,
        //        FNameEnglish = x.FNameEnglish,
        //        MNameNepali = x.MNameNepali,
        //        MNameEnglish = x.MNameEnglish,
        //        LNameNepali = x.LNameNepali,
        //        LNameEnglish = x.LNameEnglish,
        //        RFNameNepali = x.RFNameNepali,
        //        RFNameEnglish = x.RFNameEnglish,
        //        RMNameNepali = x.RMNameNepali,
        //        RMNameEnglish = x.RMNameEnglish,
        //        RLNameNepali = x.RLNameNepali,
        //        RLNameEnglish = x.RLNameEnglish,
        //        BirthSite = x.BirthSite,
        //        BirthType = x.BirthType,
        //        Caste = x.Caste,
        //        BirthHelper = x.BirthHelper,
        //        NDOBBSY = x.NDOBBSY,
        //        NDOBBSM = x.NDOBBSM,
        //        NDOBBSD = x.NDOBBSD,
        //        EDOBBSY = x.EDOBBSY,
        //        EDOBBSM = x.EDOBBSM,
        //        EDOBBSD = x.EDOBBSD,
        //        Ward = x.Ward,
        //        Province = x.Province,
        //        MuVdc = x.MuVdc,
        //        District = x.District,
        //        IsHandicapped = x.IsHandicapped,
        //        HandiNepali = x.HandiNepali,
        //        HandiEnglish = x.HandiEnglish,
        //        Gender = x.Gender,
        //        BirthPlaceNepali = x.BirthPlaceNepali,
        //        BirthPlaceEnglish = x.BirthPlaceEnglish,
        //        MarriageRedNo = x.MarriageRedNo,
        //        MarriageDate = x.MarriageDate,
        //        GFFNepali = x.GFFNepali,
        //        GFFEnglish = x.GFFEnglish,
        //        GFMNepali = x.GFMNepali,
        //        GFMEnglish = x.GFMEnglish,
        //        GFLNepali = x.GFLNepali,
        //        GFLEnglish = x.GFLEnglish,
        //        FatherFNepali = x.FatherFNepali,
        //        FatherFEnglish = x.FatherFEnglish,
        //        FatherMNepali = x.FatherMNepali,
        //        FatherMEnglish = x.FatherMEnglish,
        //        FatherLNepali = x.FatherLNepali,
        //        FatherLEnglish = x.FatherLEnglish,
        //        FatherDistrict = x.FatherDistrict,
        //        Fathervdcmu = x.Fathervdcmu,
        //        Fatherctznum = x.Fatherctznum,
        //        Fatherctzdistrict = x.Fatherctzdistrict,
        //        Fatherctzdate = x.Fatherctzdate,
        //        MotherFNepali = x.MotherFNepali,
        //        MotherFEnglish = x.MotherFEnglish,
        //        MotherMNepali = x.MotherMNepali,
        //        MotherMEnglish = x.MotherMEnglish,
        //        MotherLNepali = x.MotherLNepali,
        //        MotherLEnglish = x.MotherLEnglish,
        //        MotherDistrict = x.MotherDistrict,
        //        Mothervdcmu = x.Mothervdcmu,
        //        Motherctznum = x.Motherctznum,
        //        Motherctzdistrict = x.Motherctzdistrict,
        //        Motherctzdate = x.Motherctzdate,
        //        ApplicantFNepali = x.ApplicantFNepali,
        //        ApplicantFEnglish = x.ApplicantFEnglish,
        //        ApplicantMNepali = x.ApplicantMNepali,
        //        ApplicantMEnglish = x.ApplicantMEnglish,
        //        ApplicantLNepali = x.ApplicantLNepali,
        //        ApplicantLEnglish = x.ApplicantLEnglish,
        //        ApplicantDistrict = x.ApplicantDistrict,
        //        Applicantvdcmu = x.Applicantvdcmu,
        //        Applicantctznum = x.Applicantctznum,
        //        Applicantctzdistrict = x.Applicantctzdistrict,
        //        Applicantctzdate = x.Applicantctzdate,
        //        AppRelation = x.AppRelation,
        //        Formdate = x.Formdate,
        //        PhoneNo = x.PhoneNo,
        //        remark = x.remark

        //    }).FirstOrDefault();

        //    return View(birthDisplay);
        //}
     
        
        [HttpGet]
        public IActionResult Delete(BirthModel birth)
        {
            BirthModel row = new BirthModel();
            row = context.BirthModel.Where(x => x.RegistrationNumber == birth.RegistrationNumber).FirstOrDefault();
           
            context.BirthModel.Remove(row);
       
            context.SaveChanges();
            return RedirectToAction("list");


        }





        //[HttpGet]//SEARCH BOX
        //public IActionResult BirthCertificate1(string regno)
        //{


        //    var stdquery = from m in context.BirthModel
        //                   select m;

        //    if (!String.IsNullOrEmpty(regno))
        //    {
        //        stdquery = stdquery.Where(s => s.RegistrationNumber.Contains(regno));



        //    }
        //     return View("BirthCertificate");

        //}





        public IActionResult BirthCertificate(string regno)
        {
                BirthModel birthDisplay = context.BirthModel.Where(x => x.RegistrationNumber == regno).Select(x => new BirthModel()

            {
                BirthId = x.BirthId,
                RegistrationNumber = x.RegistrationNumber,
                RegistrationDateNepali = x.RegistrationDateNepali,
                RegistrationDateEnglish = x.RegistrationDateEnglish,
                FNameNepali = x.FNameNepali,
                FNameEnglish = x.FNameEnglish,
                MNameNepali = x.MNameNepali,
                MNameEnglish = x.MNameEnglish,
                LNameNepali = x.LNameNepali,
                LNameEnglish = x.LNameEnglish,
                RFNameNepali = x.RFNameNepali,
                RFNameEnglish = x.RFNameEnglish,
                RMNameNepali = x.RMNameNepali,
                RMNameEnglish = x.RMNameEnglish,
                RLNameNepali = x.RLNameNepali,
                RLNameEnglish = x.RLNameEnglish,
                BirthSite = x.BirthSite,
                Ward = x.Ward,
                Province = x.Province,
                MuVdc = x.MuVdc,
                District = x.District,
                BirthType = x.BirthType,
                Caste = x.Caste,
                BirthHelper = x.BirthHelper,
                NDOBBSY = x.NDOBBSY,
                NDOBBSM = x.NDOBBSM,
                NDOBBSD = x.NDOBBSD,
                EDOBBSY = x.EDOBBSY,
                EDOBBSM = x.EDOBBSM,
                EDOBBSD = x.EDOBBSD,
                IsHandicapped = x.IsHandicapped,
                HandiNepali = x.HandiNepali,
                HandiEnglish = x.HandiEnglish,
                Gender = x.Gender,
                BirthPlaceNepali = x.BirthPlaceNepali,
                BirthPlaceEnglish = x.BirthPlaceEnglish,
                MarriageRedNo = x.MarriageRedNo,
                MarriageDate = x.MarriageDate,
                GFFNepali = x.GFFNepali,
                GFFEnglish = x.GFFEnglish,
                GFMNepali = x.GFMNepali,
                GFMEnglish = x.GFMEnglish,
                GFLNepali = x.GFLNepali,
                GFLEnglish = x.GFLEnglish,
                FatherFNepali = x.FatherFNepali,
                FatherFEnglish = x.FatherFEnglish,
                FatherMNepali = x.FatherMNepali,
                FatherMEnglish = x.FatherMEnglish,
                FatherLNepali = x.FatherLNepali,
                FatherLEnglish = x.FatherLEnglish,
                FatherDistrict = x.FatherDistrict,
                Fathervdcmu = x.Fathervdcmu,
                Fatherctznum = x.Fatherctznum,
                Fatherctzdistrict = x.Fatherctzdistrict,
                Fatherctzdate = x.Fatherctzdate,
                MotherFNepali = x.MotherFNepali,
                MotherFEnglish = x.MotherFEnglish,
                MotherMNepali = x.MotherMNepali,
                MotherMEnglish = x.MotherMEnglish,
                MotherLNepali = x.MotherLNepali,
                MotherLEnglish = x.MotherLEnglish,
                MotherDistrict = x.MotherDistrict,
                Mothervdcmu = x.Mothervdcmu,
                Motherctznum = x.Motherctznum,
                Motherctzdistrict = x.Motherctzdistrict,
                Motherctzdate = x.Motherctzdate,
                ApplicantFNepali = x.ApplicantFNepali,
                ApplicantFEnglish = x.ApplicantFEnglish,
                ApplicantMNepali = x.ApplicantMNepali,
                ApplicantMEnglish = x.ApplicantMEnglish,
                ApplicantLNepali = x.ApplicantLNepali,
                ApplicantLEnglish = x.ApplicantLEnglish,
                ApplicantDistrict = x.ApplicantDistrict,
                Applicantvdcmu = x.Applicantvdcmu,
                Applicantctznum = x.Applicantctznum,
                Applicantctzdistrict = x.Applicantctzdistrict,
                Applicantctzdate = x.Applicantctzdate,
                AppRelation = x.AppRelation,
                Formdate = x.Formdate,
                PhoneNo = x.PhoneNo,
                remark = x.remark,
                IsVerified=x.IsVerified
            }).FirstOrDefault();
  return View(birthDisplay);
  

        }


        public IActionResult BirthCertificateIndex(string regno)
        {
          
            return View();
        }


    


        public IActionResult List()
        {
            List<BirthModel> births = context.BirthModel.Select(x => new BirthModel()
            {
              BirthId = x.BirthId,
           RegistrationNumber = x.RegistrationNumber,
           RegistrationDateNepali = x.RegistrationDateNepali,
           RegistrationDateEnglish = x.RegistrationDateEnglish,
          FNameNepali = x.FNameNepali,
           FNameEnglish = x.FNameEnglish,
            MNameNepali = x.MNameNepali,
           MNameEnglish = x.MNameEnglish,
            LNameNepali = x.LNameNepali,
            LNameEnglish = x.LNameEnglish,
            BirthSite = x.BirthSite,
            BirthType = x.BirthType,
            Caste = x.Caste,
                Ward = x.Ward,
                Province = x.Province,
                MuVdc = x.MuVdc,
                District = x.District,
                IsHandicapped = x.IsHandicapped,
           HandiNepali = x.HandiNepali,
           HandiEnglish = x.HandiEnglish,
           Gender = x.Gender,
                BirthHelper = x.BirthHelper,
                NDOBBSY = x.NDOBBSY,
                NDOBBSM = x.NDOBBSM,
                NDOBBSD = x.NDOBBSD,
                EDOBBSY = x.EDOBBSY,
                EDOBBSM = x.EDOBBSM,
                EDOBBSD = x.EDOBBSD,
                BirthPlaceNepali = x.BirthPlaceNepali,
 RFNameNepali = x.RFNameNepali,
                RFNameEnglish = x.RFNameEnglish,
                RMNameNepali = x.RMNameNepali,
                RMNameEnglish = x.RMNameEnglish,
                RLNameNepali = x.RLNameNepali,
                RLNameEnglish = x.RLNameEnglish,
                BirthPlaceEnglish = x.BirthPlaceEnglish,
           MarriageRedNo = x.MarriageRedNo,
           MarriageDate = x.MarriageDate,
           GFFNepali = x.GFFNepali,
           GFFEnglish = x.GFFEnglish,
           GFMNepali = x.GFMNepali,
           GFMEnglish = x.GFMEnglish,
           GFLNepali = x.GFLNepali,
           GFLEnglish = x.GFLEnglish,
           FatherFNepali = x.FatherFNepali,
           FatherFEnglish = x.FatherFEnglish,
           FatherMNepali = x.FatherMNepali,
           FatherMEnglish = x.FatherMEnglish,
           FatherLNepali = x.FatherLNepali,
           FatherLEnglish = x.FatherLEnglish,
           FatherDistrict = x.FatherDistrict,
           Fathervdcmu = x.Fathervdcmu,
           Fatherctznum = x.Fatherctznum,
           Fatherctzdistrict = x.Fatherctzdistrict,
           Fatherctzdate = x.Fatherctzdate,
           MotherFNepali = x.MotherFNepali,
           MotherFEnglish = x.MotherFEnglish,
           MotherMNepali = x.MotherMNepali,
           MotherMEnglish = x.MotherMEnglish,
           MotherLNepali = x.MotherLNepali,
           MotherLEnglish = x.MotherLEnglish,
           MotherDistrict = x.MotherDistrict,
           Mothervdcmu = x.Mothervdcmu,
           Motherctznum = x.Motherctznum,
           Motherctzdistrict = x.Motherctzdistrict,
           Motherctzdate = x.Motherctzdate,
           ApplicantFNepali = x.ApplicantFNepali,
           ApplicantFEnglish = x.ApplicantFEnglish,
           ApplicantMNepali = x.ApplicantMNepali,
           ApplicantMEnglish = x.ApplicantMEnglish,
           ApplicantLNepali = x.ApplicantLNepali,
           ApplicantLEnglish = x.ApplicantLEnglish,
           ApplicantDistrict = x.ApplicantDistrict,
           Applicantvdcmu = x.Applicantvdcmu,
           Applicantctznum = x.Applicantctznum,
           Applicantctzdistrict = x.Applicantctzdistrict,
           Applicantctzdate = x.Applicantctzdate,
           AppRelation = x.AppRelation,
           Formdate = x.Formdate,
           PhoneNo = x.PhoneNo,
           remark = x.remark,
           IsVerified=x.IsVerified


        }
            ).ToList();
            return View(births);

        }




    }
}
