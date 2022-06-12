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
    public class DeathController : Controller
    {
        private EgovernanceDB context;
        public DeathController(EgovernanceDB _context)
        {
            context = _context;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Create(DeathModel death)
        {


            DeathModel row = new DeathModel();
            row.DeathId = death.DeathId;
            row.RegistrationNumber = death.RegistrationNumber;
            row.RegistrationDateNepali = death.RegistrationDateNepali;
            row.RegistrationDateEnglish = death.RegistrationDateEnglish;
            //row.IdentityNo = death.IdentityNo;
            row.FNameNepali = death.FNameNepali;
            row.MNameNepali = death.MNameNepali;
            row.LNameNepali = death.LNameNepali;
            row.FNameEnglish = death.FNameEnglish;
            row.MNameEnglish = death.MNameEnglish;
            row.LNameEnglish = death.LNameEnglish;
            row.Caste = death.Caste;
            row.CitzNo = death.CitzNo;
            row.NDOBBSY = death.NDOBBSY;
            row.NDOBBSM = death.NDOBBSM;
            row.NDOBBSD = death.NDOBBSD;
            row.DWFullNameEnglish = death.DWFullNameEnglish;
            row.DWFullNameNepali = death.DWFullNameNepali;
            row.EDOBBSY = death.EDOBBSY;
            row.EDOBBSM = death.EDOBBSM;
            row.EDOBBSD = death.EDOBBSD;
            row.DReport = death.DReport;
            row.IsVerified = death.IsVerified;
            row.DProvince = death.DProvince;
            row.DDistrict = death.DDistrict;
            row.DVDC = death.DVDC;
            row.DWard = death.DWard;
            row.DCtznNo = death.DCtznNo;
            row.Dctzdistrict = death.Dctzdistrict;


            row.Gender = death.Gender;
            row.EDeathDate = death.EDeathDate;
            row.NDeathDate = death.NDeathDate;

            row.DeathPlace = death.DeathPlace;
            row.DeathReason = death.DeathReason;
            row.IsMarried = death.IsMarried;

            row.GFFNepali = death.GFFNepali;
            row.GFFEnglish = death.GFFEnglish;
            row.GFMNepali = death.GFMNepali;
            row.GFMEnglish = death.GFMEnglish;
            row.GFLNepali = death.GFLNepali;
            row.GFLEnglish = death.GFLEnglish;
            row.FatherFNepali = death.FatherFNepali;
            row.FatherFEnglish = death.FatherFEnglish;
            row.FatherMNepali = death.FatherMNepali;
            row.FatherMEnglish = death.FatherMEnglish;
            row.FatherLNepali = death.FatherLNepali;
            row.FatherLEnglish = death.FatherLEnglish;
            row.FatherDistrict = death.FatherDistrict;
            row.Fathervdcmu = death.Fathervdcmu;
            row.Fatherctznum = death.Fatherctznum;
            row.Fatherctzdistrict = death.Fatherctzdistrict;
            row.Fatherctzdate = death.Fatherctzdate;
            row.MotherFNepali = death.MotherFNepali;
            row.MotherFEnglish = death.MotherFEnglish;
            row.MotherMNepali = death.MotherMNepali;
            row.MotherMEnglish = death.MotherMEnglish;
            row.MotherLNepali = death.MotherLNepali;
            row.MotherLEnglish = death.MotherLEnglish;
            row.MotherDistrict = death.MotherDistrict;
            row.Mothervdcmu = death.Mothervdcmu;
            row.Motherctznum = death.Motherctznum;
            row.Motherctzdistrict = death.Motherctzdistrict;
            row.Motherctzdate = death.Motherctzdate;

            row.WNameFEnglish = death.WNameFEnglish;
            row.WNameMEnglish = death.WNameMEnglish;
            row.WNameSEnglish = death.WNameSEnglish;
            row.WNameFNepali = death.WNameMNepali;
            row.WNameSNepali = death.WNameSNepali;
            row.ApplicantFNepali = death.ApplicantFNepali;
            row.ApplicantMNepali = death.ApplicantMNepali;
            row.ApplicantLNepali = death.ApplicantLNepali;
            row.ApplicantFEnglish = death.ApplicantFEnglish;
            row.ApplicantMEnglish = death.ApplicantMEnglish;
            row.ApplicantLEnglish = death.ApplicantLEnglish;
            row.AppRelation = death.AppRelation;
            row.ApplicantDistrict = death.ApplicantDistrict;
            row.Applicantvdcmu = death.Applicantvdcmu;
            row.Applicantward = death.Applicantward;
            row.Applicantctznum = death.Applicantctznum;
            row.Applicantctzdistrict = death.Applicantctzdistrict;
            row.Applicantctzdate = death.Applicantctzdate;
            row.Formdate = death.Formdate;
            row.PhoneNo = death.PhoneNo;
            row.remark = death.remark;
            row.RFNameNepali = death.RFNameNepali;
            row.RFNameEnglish = death.RFNameEnglish;
            row.RMNameNepali = death.RMNameNepali;
            row.RMNameEnglish = death.RMNameEnglish;
            row.RLNameNepali = death.RLNameNepali;
            row.RLNameEnglish = death.RLNameEnglish;
            row.IsRegistered = false;

            context.Entry(row).State = EntityState.Added;

            context.SaveChanges();

            using (var client = new SmtpClient())
            {
                client.Connect("smtp.gmail.com");
                client.Authenticate("armantiwari1123@gmail.com", "Armantiwari1123@*");
                var bodyBuilder = new BodyBuilder
                {
                    HtmlBody = $"<p><b>Dear {death.ApplicantFEnglish}{death.ApplicantMEnglish}{death.ApplicantLEnglish}</b></p>" +

                     $"<p>This is <b>MandanDeupur Nagarpalika </b>.We have received your details for birth Certification.</p>" +
                   $"<p>Here is your registered no. through which you can downlaod your birthCertificate</p>" +
                    $"<p>Name:{death.RegistrationNumber}</p>",
                    TextBody = "{death.RegistrationNumber}"

                };
                var message = new MimeMessage
                {
                    Body = bodyBuilder.ToMessageBody()

                };
                message.From.Add(new MailboxAddress("MandanDeupur.com", "armantiwari1123@gmail.com"));
                message.To.Add(new MailboxAddress(death.PhoneNo));
                message.Subject = "Data Submitted Successfuly!!";
                client.Send(message);
                client.Disconnect(true);
            }
            //TempData["Message"] = "Thank you for your query.We will contact you soon!!!";


            return RedirectToAction("index");


        }
        public IActionResult DeathCertificate(string regno)
        {
            DeathModel deathDisplay = context.DeathModel.Where(x => x.RegistrationNumber == regno).Select(x => new DeathModel()
            {
                DeathId = x.DeathId,
                RegistrationNumber = x.RegistrationNumber,
                RegistrationDateNepali = x.RegistrationDateNepali,
                RegistrationDateEnglish = x.RegistrationDateEnglish,
                //row.IdentityNo = death.IdentityNo;
                FNameNepali = x.FNameNepali,
                MNameNepali = x.MNameNepali,
                LNameNepali = x.LNameNepali,
                FNameEnglish = x.FNameEnglish,
                MNameEnglish = x.MNameEnglish,
                LNameEnglish = x.LNameEnglish,
                Caste = x.Caste,
                CitzNo = x.CitzNo,
                NDOBBSY = x.NDOBBSY,
                NDOBBSM = x.NDOBBSM,
                NDOBBSD = x.NDOBBSD,
                DWFullNameEnglish = x.DWFullNameEnglish,
                DWFullNameNepali = x.DWFullNameNepali,
                EDOBBSY = x.EDOBBSY,
                EDOBBSM = x.EDOBBSM,
                EDOBBSD = x.EDOBBSD,
                DReport = x.DReport,
                IsVerified = x.IsVerified,
                DProvince = x.DProvince,
                DDistrict = x.DDistrict,
                DVDC = x.DVDC,
                DWard = x.DWard,
                DCtznNo = x.DCtznNo,
                Dctzdistrict = x.Dctzdistrict,
                Gender = x.Gender,
                EDeathDate = x.EDeathDate,
                NDeathDate = x.NDeathDate,
                DeathDateReg = x.DeathDateReg,
                DeathPlace = x.DeathPlace,
                DeathReason = x.DeathReason,
                IsMarried = x.IsMarried,

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

                WNameFEnglish = x.WNameFEnglish,
                WNameMEnglish = x.WNameMEnglish,
                WNameSEnglish = x.WNameSEnglish,
                WNameFNepali = x.WNameMNepali,
                WNameSNepali = x.WNameSNepali,
                ApplicantFNepali = x.ApplicantFNepali,
                ApplicantMNepali = x.ApplicantMNepali,
                ApplicantLNepali = x.ApplicantLNepali,
                ApplicantFEnglish = x.ApplicantFEnglish,
                ApplicantMEnglish = x.ApplicantMEnglish,
                ApplicantLEnglish = x.ApplicantLEnglish,
                AppRelation = x.AppRelation,
                ApplicantDistrict = x.ApplicantDistrict,
                Applicantvdcmu = x.Applicantvdcmu,
                Applicantward = x.Applicantward,
                Applicantctznum = x.Applicantctznum,
                Applicantctzdistrict = x.Applicantctzdistrict,
                Applicantctzdate = x.Applicantctzdate,
                Formdate = x.Formdate,
                PhoneNo = x.PhoneNo,
                remark = x.remark,
                RFNameNepali = x.RFNameNepali,
                RFNameEnglish = x.RFNameEnglish,
                RMNameNepali = x.RMNameNepali,
                RMNameEnglish = x.RMNameEnglish,
                RLNameNepali = x.RLNameNepali,
                RLNameEnglish = x.RLNameEnglish,
                IsRegistered=x.IsRegistered
               
            }).FirstOrDefault();
            return View(deathDisplay);
        }
        public IActionResult DeathCertificateIndex(int deathId)
        {
          

            return View();
        }
        public IActionResult List()
        {
            List<DeathModel> deaths = context.DeathModel.Select(x => new DeathModel()
            {
                DeathId = x.DeathId,
                RegistrationNumber = x.RegistrationNumber,
                RegistrationDateNepali = x.RegistrationDateNepali,
                RegistrationDateEnglish = x.RegistrationDateEnglish,
                //row.IdentityNo = death.IdentityNo;
                FNameNepali = x.FNameNepali,
                MNameNepali = x.MNameNepali,
                LNameNepali = x.LNameNepali,
                FNameEnglish = x.FNameEnglish,
                MNameEnglish = x.MNameEnglish,
                LNameEnglish = x.LNameEnglish,
                Caste = x.Caste,
                CitzNo = x.CitzNo,
                NDOBBSY = x.NDOBBSY,
                NDOBBSM = x.NDOBBSM,
                NDOBBSD = x.NDOBBSD,
                DWFullNameEnglish = x.DWFullNameEnglish,
                DWFullNameNepali = x.DWFullNameNepali,
                EDOBBSY = x.EDOBBSY,
                EDOBBSM = x.EDOBBSM,
                EDOBBSD = x.EDOBBSD,
                DReport = x.DReport,
                IsVerified = x.IsVerified,
                DProvince = x.DProvince,
                DDistrict = x.DDistrict,
                DVDC = x.DVDC,
                DWard = x.DWard,
                DCtznNo = x.DCtznNo,
                Dctzdistrict = x.Dctzdistrict,
                Gender = x.Gender,
                EDeathDate = x.EDeathDate,
                NDeathDate = x.NDeathDate,
                DeathDateReg = x.DeathDateReg,
                DeathPlace = x.DeathPlace,
                DeathReason = x.DeathReason,
                IsMarried = x.IsMarried,

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

                WNameFEnglish = x.WNameFEnglish,
                WNameMEnglish = x.WNameMEnglish,
                WNameSEnglish = x.WNameSEnglish,
                WNameFNepali = x.WNameMNepali,
                WNameSNepali = x.WNameSNepali,
                ApplicantFNepali = x.ApplicantFNepali,
                ApplicantMNepali = x.ApplicantMNepali,
                ApplicantLNepali = x.ApplicantLNepali,
                ApplicantFEnglish = x.ApplicantFEnglish,
                ApplicantMEnglish = x.ApplicantMEnglish,
                ApplicantLEnglish = x.ApplicantLEnglish,
                AppRelation = x.AppRelation,
                ApplicantDistrict = x.ApplicantDistrict,
                Applicantvdcmu = x.Applicantvdcmu,
                Applicantward = x.Applicantward,
                Applicantctznum = x.Applicantctznum,
                Applicantctzdistrict = x.Applicantctzdistrict,
                Applicantctzdate = x.Applicantctzdate,
                Formdate = x.Formdate,
                PhoneNo = x.PhoneNo,
                remark = x.remark,
                RFNameNepali = x.RFNameNepali,
                RFNameEnglish = x.RFNameEnglish,
                RMNameNepali = x.RMNameNepali,
                RMNameEnglish = x.RMNameEnglish,
                RLNameNepali = x.RLNameNepali,
                RLNameEnglish = x.RLNameEnglish,
                IsRegistered=x.IsRegistered
              

            }
              ).ToList();
            return View(deaths);

        }
        [HttpGet]
        public IActionResult Delete(DeathModel death)
        {
            DeathModel row = new DeathModel();
            row = context.DeathModel.Where(x => x.RegistrationNumber == death.RegistrationNumber).FirstOrDefault();

            context.DeathModel.Remove(row);

            context.SaveChanges();
            return RedirectToAction("list");


        }










        public IActionResult Edit(int deathId)
        {
            DeathModel deathDisplay = context.DeathModel.Where(x => x.DeathId == deathId).Select(x => new DeathModel()
            {
                DeathId = x.DeathId,
                RegistrationNumber = x.RegistrationNumber,
                RegistrationDateNepali = x.RegistrationDateNepali,
                RegistrationDateEnglish = x.RegistrationDateEnglish,
                //row.IdentityNo = death.IdentityNo;
                FNameNepali = x.FNameNepali,
                MNameNepali = x.MNameNepali,
                LNameNepali = x.LNameNepali,
                FNameEnglish = x.FNameEnglish,
                MNameEnglish = x.MNameEnglish,
                LNameEnglish = x.LNameEnglish,
                Caste = x.Caste,
                CitzNo = x.CitzNo,
                NDOBBSY = x.NDOBBSY,
                NDOBBSM = x.NDOBBSM,
                NDOBBSD = x.NDOBBSD,
                DWFullNameEnglish = x.DWFullNameEnglish,
                DWFullNameNepali = x.DWFullNameNepali,
                EDOBBSY = x.EDOBBSY,
                EDOBBSM = x.EDOBBSM,
                EDOBBSD = x.EDOBBSD,
                DReport = x.DReport,
                IsVerified = x.IsVerified,
                DProvince = x.DProvince,
                DDistrict = x.DDistrict,
                DVDC = x.DVDC,
                DWard = x.DWard,
                DCtznNo = x.DCtznNo,
                Dctzdistrict = x.Dctzdistrict,
                Gender = x.Gender,
                EDeathDate = x.EDeathDate,
                NDeathDate = x.NDeathDate,
                DeathDateReg = x.DeathDateReg,
                DeathPlace = x.DeathPlace,
                DeathReason = x.DeathReason,
                IsMarried = x.IsMarried,

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

                WNameFEnglish = x.WNameFEnglish,
                WNameMEnglish = x.WNameMEnglish,
                WNameSEnglish = x.WNameSEnglish,
                WNameFNepali = x.WNameMNepali,
                WNameSNepali = x.WNameSNepali,
                ApplicantFNepali = x.ApplicantFNepali,
                ApplicantMNepali = x.ApplicantMNepali,
                ApplicantLNepali = x.ApplicantLNepali,
                ApplicantFEnglish = x.ApplicantFEnglish,
                ApplicantMEnglish = x.ApplicantMEnglish,
                ApplicantLEnglish = x.ApplicantLEnglish,
                AppRelation = x.AppRelation,
                ApplicantDistrict = x.ApplicantDistrict,
                Applicantvdcmu = x.Applicantvdcmu,
                Applicantward = x.Applicantward,
                Applicantctznum = x.Applicantctznum,
                Applicantctzdistrict = x.Applicantctzdistrict,
                Applicantctzdate = x.Applicantctzdate,
                Formdate = x.Formdate,
                PhoneNo = x.PhoneNo,
                remark = x.remark,
                RFNameNepali = x.RFNameNepali,
                RFNameEnglish = x.RFNameEnglish,
                RMNameNepali = x.RMNameNepali,
                RMNameEnglish = x.RMNameEnglish,
                RLNameNepali = x.RLNameNepali,
                RLNameEnglish = x.RLNameEnglish,
                IsRegistered = x.IsRegistered

            }).FirstOrDefault();
            return View(deathDisplay);
        }
    
        [HttpPost]


    public IActionResult Edit(DeathModel death)
    {


        DeathModel row = new DeathModel();
        row.DeathId = death.DeathId;
        row.RegistrationNumber = death.RegistrationNumber;
        row.RegistrationDateNepali = death.RegistrationDateNepali;
        row.RegistrationDateEnglish = death.RegistrationDateEnglish;
        //row.IdentityNo = death.IdentityNo;
        row.FNameNepali = death.FNameNepali;
        row.MNameNepali = death.MNameNepali;
        row.LNameNepali = death.LNameNepali;
        row.FNameEnglish = death.FNameEnglish;
        row.MNameEnglish = death.MNameEnglish;
        row.LNameEnglish = death.LNameEnglish;
        row.Caste = death.Caste;
        row.CitzNo = death.CitzNo;
        row.NDOBBSY = death.NDOBBSY;
        row.NDOBBSM = death.NDOBBSM;
        row.NDOBBSD = death.NDOBBSD;
        row.DWFullNameEnglish = death.DWFullNameEnglish;
        row.DWFullNameNepali = death.DWFullNameNepali;
        row.EDOBBSY = death.EDOBBSY;
        row.EDOBBSM = death.EDOBBSM;
        row.EDOBBSD = death.EDOBBSD;
        row.DReport = death.DReport;
        row.IsVerified = death.IsVerified;
        row.DProvince = death.DProvince;
        row.DDistrict = death.DDistrict;
        row.DVDC = death.DVDC;
        row.DWard = death.DWard;
        row.DCtznNo = death.DCtznNo;
        row.Dctzdistrict = death.Dctzdistrict;


        row.Gender = death.Gender;
        row.EDeathDate = death.EDeathDate;
        row.NDeathDate = death.NDeathDate;

        row.DeathPlace = death.DeathPlace;
        row.DeathReason = death.DeathReason;
        row.IsMarried = death.IsMarried;

        row.GFFNepali = death.GFFNepali;
        row.GFFEnglish = death.GFFEnglish;
        row.GFMNepali = death.GFMNepali;
        row.GFMEnglish = death.GFMEnglish;
        row.GFLNepali = death.GFLNepali;
        row.GFLEnglish = death.GFLEnglish;
        row.FatherFNepali = death.FatherFNepali;
        row.FatherFEnglish = death.FatherFEnglish;
        row.FatherMNepali = death.FatherMNepali;
        row.FatherMEnglish = death.FatherMEnglish;
        row.FatherLNepali = death.FatherLNepali;
        row.FatherLEnglish = death.FatherLEnglish;
        row.FatherDistrict = death.FatherDistrict;
        row.Fathervdcmu = death.Fathervdcmu;
        row.Fatherctznum = death.Fatherctznum;
        row.Fatherctzdistrict = death.Fatherctzdistrict;
        row.Fatherctzdate = death.Fatherctzdate;
        row.MotherFNepali = death.MotherFNepali;
        row.MotherFEnglish = death.MotherFEnglish;
        row.MotherMNepali = death.MotherMNepali;
        row.MotherMEnglish = death.MotherMEnglish;
        row.MotherLNepali = death.MotherLNepali;
        row.MotherLEnglish = death.MotherLEnglish;
        row.MotherDistrict = death.MotherDistrict;
        row.Mothervdcmu = death.Mothervdcmu;
        row.Motherctznum = death.Motherctznum;
        row.Motherctzdistrict = death.Motherctzdistrict;
        row.Motherctzdate = death.Motherctzdate;

        row.WNameFEnglish = death.WNameFEnglish;
        row.WNameMEnglish = death.WNameMEnglish;
        row.WNameSEnglish = death.WNameSEnglish;
        row.WNameFNepali = death.WNameMNepali;
        row.WNameSNepali = death.WNameSNepali;
        row.ApplicantFNepali = death.ApplicantFNepali;
        row.ApplicantMNepali = death.ApplicantMNepali;
        row.ApplicantLNepali = death.ApplicantLNepali;
        row.ApplicantFEnglish = death.ApplicantFEnglish;
        row.ApplicantMEnglish = death.ApplicantMEnglish;
        row.ApplicantLEnglish = death.ApplicantLEnglish;
        row.AppRelation = death.AppRelation;
        row.ApplicantDistrict = death.ApplicantDistrict;
        row.Applicantvdcmu = death.Applicantvdcmu;
        row.Applicantward = death.Applicantward;
        row.Applicantctznum = death.Applicantctznum;
        row.Applicantctzdistrict = death.Applicantctzdistrict;
        row.Applicantctzdate = death.Applicantctzdate;
        row.Formdate = death.Formdate;
        row.PhoneNo = death.PhoneNo;
        row.remark = death.remark;
        row.RFNameNepali = death.RFNameNepali;
        row.RFNameEnglish = death.RFNameEnglish;
        row.RMNameNepali = death.RMNameNepali;
        row.RMNameEnglish = death.RMNameEnglish;
        row.RLNameNepali = death.RLNameNepali;
        row.RLNameEnglish = death.RLNameEnglish;
        row.IsRegistered = death.IsRegistered;
        context.Attach(row);
        context.Entry(row).State = EntityState.Modified;
        context.SaveChanges();
        return RedirectToAction("LIST");


    }






    }
}
