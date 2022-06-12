using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EGovProject.Migrations
{
    public partial class addedModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.CreateTable(
            //    name: "Birth",
            //    columns: table => new
            //    {
            //        BirthId = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        RegistrationNumber = table.Column<string>(nullable: false),
            //        RegistrationDateNepali = table.Column<string>(nullable: false),
            //        RegistrationDateEnglish = table.Column<string>(nullable: false),
            //        FNameNepali = table.Column<string>(nullable: false),
            //        MNameNepali = table.Column<string>(nullable: true),
            //        LNameNepali = table.Column<string>(nullable: false),
            //        FNameEnglish = table.Column<string>(nullable: false),
            //        MNameEnglish = table.Column<string>(nullable: true),
            //        LNameEnglish = table.Column<string>(nullable: false),
            //        BirthSite = table.Column<string>(nullable: true),
            //        BirthType = table.Column<string>(nullable: true),
            //        BirthHelper = table.Column<string>(nullable: true),
            //        BabyWeight = table.Column<string>(nullable: true),
            //        Caste = table.Column<string>(nullable: true),
            //        IsHandicapped = table.Column<bool>(nullable: false),
            //        HandiNepali = table.Column<string>(nullable: true),
            //        HandiEnglish = table.Column<string>(nullable: true),
            //        NDOBBSY = table.Column<string>(nullable: true),
            //        NDOBBSM = table.Column<string>(nullable: true),
            //        NDOBBSD = table.Column<string>(nullable: true),
            //        EDOBBSY = table.Column<string>(nullable: true),
            //        EDOBBSM = table.Column<string>(nullable: true),
            //        EDOBBSD = table.Column<string>(nullable: true),
            //        Gender = table.Column<string>(nullable: true),
            //        Province = table.Column<string>(nullable: true),
            //        District = table.Column<string>(nullable: true),
            //        MuVdc = table.Column<string>(nullable: true),
            //        Ward = table.Column<int>(nullable: false),
            //        BirthPlaceNepali = table.Column<string>(nullable: true),
            //        BirthPlaceEnglish = table.Column<string>(nullable: true),
            //        MarriageRedNo = table.Column<string>(nullable: true),
            //        MarriageDate = table.Column<string>(nullable: true),
            //        GFFNepali = table.Column<string>(nullable: true),
            //        GFFEnglish = table.Column<string>(nullable: true),
            //        GFMNepali = table.Column<string>(nullable: true),
            //        GFMEnglish = table.Column<string>(nullable: true),
            //        GFLNepali = table.Column<string>(nullable: true),
            //        GFLEnglish = table.Column<string>(nullable: true),
            //        FatherFNepali = table.Column<string>(nullable: true),
            //        FatherFEnglish = table.Column<string>(nullable: true),
            //        FatherMNepali = table.Column<string>(nullable: true),
            //        FatherMEnglish = table.Column<string>(nullable: true),
            //        FatherLNepali = table.Column<string>(nullable: true),
            //        FatherLEnglish = table.Column<string>(nullable: true),
            //        FatherDistrict = table.Column<string>(nullable: true),
            //        Fathervdcmu = table.Column<string>(nullable: true),
            //        Fatherward = table.Column<string>(nullable: true),
            //        Fatherctznum = table.Column<string>(nullable: true),
            //        Fatherctzdistrict = table.Column<string>(nullable: true),
            //        Fatherctzdate = table.Column<string>(nullable: true),
            //        MotherFNepali = table.Column<string>(nullable: true),
            //        MotherFEnglish = table.Column<string>(nullable: true),
            //        MotherMNepali = table.Column<string>(nullable: true),
            //        MotherMEnglish = table.Column<string>(nullable: true),
            //        MotherLNepali = table.Column<string>(nullable: true),
            //        MotherLEnglish = table.Column<string>(nullable: true),
            //        MotherDistrict = table.Column<string>(nullable: true),
            //        Mothervdcmu = table.Column<string>(nullable: true),
            //        Motherward = table.Column<string>(nullable: true),
            //        Motherctznum = table.Column<string>(nullable: true),
            //        Motherctzdistrict = table.Column<string>(nullable: true),
            //        Motherctzdate = table.Column<string>(nullable: true),
            //        ApplicantFNepali = table.Column<string>(nullable: true),
            //        ApplicantMNepali = table.Column<string>(nullable: true),
            //        ApplicantLNepali = table.Column<string>(nullable: true),
            //        ApplicantFEnglish = table.Column<string>(nullable: true),
            //        ApplicantMEnglish = table.Column<string>(nullable: true),
            //        ApplicantLEnglish = table.Column<string>(nullable: true),
            //        AppRelation = table.Column<string>(nullable: true),
            //        ApplicantDistrict = table.Column<string>(nullable: true),
            //        Applicantvdcmu = table.Column<string>(nullable: true),
            //        Applicantward = table.Column<string>(nullable: true),
            //        Applicantctznum = table.Column<string>(nullable: true),
            //        Applicantctzdistrict = table.Column<string>(nullable: true),
            //        Applicantctzdate = table.Column<string>(nullable: true),
            //        Formdate = table.Column<string>(nullable: true),
            //        PhoneNo = table.Column<string>(nullable: true),
            //        remark = table.Column<string>(nullable: true),
            //        RFNameNepali = table.Column<string>(nullable: false),
            //        RMNameNepali = table.Column<string>(nullable: true),
            //        RLNameNepali = table.Column<string>(nullable: false),
            //        RFNameEnglish = table.Column<string>(nullable: false),
            //        RMNameEnglish = table.Column<string>(nullable: true),
            //        RLNameEnglish = table.Column<string>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Birth", x => x.BirthId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "BirthModel",
            //    columns: table => new
            //    {
            //        BirthId = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        RegistrationNumber = table.Column<string>(nullable: false),
            //        RegistrationDateNepali = table.Column<string>(nullable: false),
            //        RegistrationDateEnglish = table.Column<string>(nullable: false),
            //        FNameNepali = table.Column<string>(nullable: false),
            //        MNameNepali = table.Column<string>(nullable: true),
            //        LNameNepali = table.Column<string>(nullable: false),
            //        FNameEnglish = table.Column<string>(nullable: false),
            //        MNameEnglish = table.Column<string>(nullable: true),
            //        LNameEnglish = table.Column<string>(nullable: false),
            //        BirthSite = table.Column<string>(nullable: true),
            //        BirthType = table.Column<string>(nullable: true),
            //        BirthHelper = table.Column<string>(nullable: true),
            //        BabyWeight = table.Column<string>(nullable: true),
            //        Caste = table.Column<string>(nullable: true),
            //        IsHandicapped = table.Column<bool>(nullable: false),
            //        HandiNepali = table.Column<string>(nullable: true),
            //        HandiEnglish = table.Column<string>(nullable: true),
            //        NDOBBSY = table.Column<string>(nullable: true),
            //        NDOBBSM = table.Column<string>(nullable: true),
            //        NDOBBSD = table.Column<string>(nullable: true),
            //        EDOBBSY = table.Column<string>(nullable: true),
            //        EDOBBSM = table.Column<string>(nullable: true),
            //        EDOBBSD = table.Column<string>(nullable: true),
            //        Gender = table.Column<string>(nullable: true),
            //        Province = table.Column<string>(nullable: true),
            //        District = table.Column<string>(nullable: true),
            //        MuVdc = table.Column<string>(nullable: true),
            //        Ward = table.Column<int>(nullable: false),
            //        BirthPlaceNepali = table.Column<string>(nullable: true),
            //        BirthPlaceEnglish = table.Column<string>(nullable: true),
            //        MarriageRedNo = table.Column<string>(nullable: true),
            //        MarriageDate = table.Column<string>(nullable: true),
            //        GFFNepali = table.Column<string>(nullable: true),
            //        GFFEnglish = table.Column<string>(nullable: true),
            //        GFMNepali = table.Column<string>(nullable: true),
            //        GFMEnglish = table.Column<string>(nullable: true),
            //        GFLNepali = table.Column<string>(nullable: true),
            //        GFLEnglish = table.Column<string>(nullable: true),
            //        FatherFNepali = table.Column<string>(nullable: true),
            //        FatherFEnglish = table.Column<string>(nullable: true),
            //        FatherMNepali = table.Column<string>(nullable: true),
            //        FatherMEnglish = table.Column<string>(nullable: true),
            //        FatherLNepali = table.Column<string>(nullable: true),
            //        FatherLEnglish = table.Column<string>(nullable: true),
            //        FatherDistrict = table.Column<string>(nullable: true),
            //        Fathervdcmu = table.Column<string>(nullable: true),
            //        Fatherward = table.Column<string>(nullable: true),
            //        Fatherctznum = table.Column<string>(nullable: true),
            //        Fatherctzdistrict = table.Column<string>(nullable: true),
            //        Fatherctzdate = table.Column<string>(nullable: true),
            //        MotherFNepali = table.Column<string>(nullable: true),
            //        MotherFEnglish = table.Column<string>(nullable: true),
            //        MotherMNepali = table.Column<string>(nullable: true),
            //        MotherMEnglish = table.Column<string>(nullable: true),
            //        MotherLNepali = table.Column<string>(nullable: true),
            //        MotherLEnglish = table.Column<string>(nullable: true),
            //        MotherDistrict = table.Column<string>(nullable: true),
            //        Mothervdcmu = table.Column<string>(nullable: true),
            //        Motherward = table.Column<string>(nullable: true),
            //        Motherctznum = table.Column<string>(nullable: true),
            //        Motherctzdistrict = table.Column<string>(nullable: true),
            //        Motherctzdate = table.Column<string>(nullable: true),
            //        ApplicantFNepali = table.Column<string>(nullable: true),
            //        ApplicantMNepali = table.Column<string>(nullable: true),
            //        ApplicantLNepali = table.Column<string>(nullable: true),
            //        ApplicantFEnglish = table.Column<string>(nullable: true),
            //        ApplicantMEnglish = table.Column<string>(nullable: true),
            //        ApplicantLEnglish = table.Column<string>(nullable: true),
            //        AppRelation = table.Column<string>(nullable: true),
            //        ApplicantDistrict = table.Column<string>(nullable: true),
            //        Applicantvdcmu = table.Column<string>(nullable: true),
            //        Applicantward = table.Column<string>(nullable: true),
            //        Applicantctznum = table.Column<string>(nullable: true),
            //        Applicantctzdistrict = table.Column<string>(nullable: true),
            //        Applicantctzdate = table.Column<string>(nullable: true),
            //        Formdate = table.Column<string>(nullable: true),
            //        PhoneNo = table.Column<string>(nullable: true),
            //        remark = table.Column<string>(nullable: true),
            //        RFNameNepali = table.Column<string>(nullable: false),
            //        RMNameNepali = table.Column<string>(nullable: true),
            //        RLNameNepali = table.Column<string>(nullable: false),
            //        RFNameEnglish = table.Column<string>(nullable: false),
            //        RMNameEnglish = table.Column<string>(nullable: true),
            //        RLNameEnglish = table.Column<string>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_BirthModel", x => x.BirthId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ComplainModel",
            //    columns: table => new
            //    {
            //        ComplainId = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(nullable: false),
            //        Type = table.Column<string>(nullable: false),
            //        ComplainDate = table.Column<DateTime>(nullable: false),
            //        Details = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ComplainModel", x => x.ComplainId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Complains",
            //    columns: table => new
            //    {
            //        ComplainId = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(nullable: false),
            //        Type = table.Column<string>(nullable: false),
            //        ComplainDate = table.Column<DateTime>(nullable: false),
            //        Details = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Complains", x => x.ComplainId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ContactModel",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(nullable: false),
            //        Phone = table.Column<string>(nullable: true),
            //        Subject = table.Column<string>(nullable: false),
            //        Type = table.Column<string>(nullable: true),
            //        Email = table.Column<string>(nullable: true),
            //        Message = table.Column<string>(nullable: false),
            //        ContactDate = table.Column<DateTime>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ContactModel", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Contacts",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(nullable: true),
            //        Phone = table.Column<string>(nullable: true),
            //        Address = table.Column<string>(nullable: true),
            //        Email = table.Column<string>(nullable: true),
            //        Message = table.Column<string>(nullable: true),
            //        ContactDate = table.Column<DateTime>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Contacts", x => x.Id);
            //    });

            migrationBuilder.CreateTable(
                name: "DeathModel",
                columns: table => new
                {
                    DeathId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RegistrationNumber = table.Column<string>(nullable: false),
                    RegistrationDateNepali = table.Column<string>(nullable: false),
                    RegistrationDateEnglish = table.Column<string>(nullable: false),
                    IdentityNo = table.Column<int>(nullable: false),
                    FNameNepali = table.Column<string>(nullable: true),
                    MNameNepali = table.Column<string>(nullable: true),
                    LNameNepali = table.Column<string>(nullable: true),
                    FNameEnglish = table.Column<string>(nullable: true),
                    MNameEnglish = table.Column<string>(nullable: true),
                    LNameEnglish = table.Column<string>(nullable: true),
                    Caste = table.Column<string>(nullable: true),
                    CitzNo = table.Column<string>(nullable: true),
                    NDOBBSY = table.Column<string>(nullable: true),
                    NDOBBSM = table.Column<string>(nullable: true),
                    NDOBBSD = table.Column<string>(nullable: true),
                    DVDC = table.Column<string>(nullable: true),
                    DWard = table.Column<string>(nullable: true),
                    DCtznNo = table.Column<string>(nullable: true),
                    Dctzdistrict = table.Column<string>(nullable: true),
                    DWFullNameEnglish = table.Column<string>(nullable: true),
                    DWFullNameNepali = table.Column<string>(nullable: true),
                    EDOBBSY = table.Column<string>(nullable: true),
                    EDOBBSM = table.Column<string>(nullable: true),
                    EDOBBSD = table.Column<string>(nullable: true),
                    IsVerified = table.Column<string>(nullable: true),
                    DReport = table.Column<string>(nullable: true),
                    DProvince = table.Column<string>(nullable: true),
                    DDistrict = table.Column<string>(nullable: true),
                    Gender = table.Column<string>(nullable: true),
                    DeathDate = table.Column<string>(nullable: true),
                    DeathDateReg = table.Column<string>(nullable: true),
                    DeathPlace = table.Column<string>(nullable: true),
                    DeathReason = table.Column<string>(nullable: true),
                    IsMarried = table.Column<bool>(nullable: false),
                    GFFNepali = table.Column<string>(nullable: true),
                    GFFEnglish = table.Column<string>(nullable: true),
                    GFMNepali = table.Column<string>(nullable: true),
                    GFMEnglish = table.Column<string>(nullable: true),
                    GFLNepali = table.Column<string>(nullable: true),
                    GFLEnglish = table.Column<string>(nullable: true),
                    FatherFNepali = table.Column<string>(nullable: true),
                    FatherFEnglish = table.Column<string>(nullable: true),
                    FatherMNepali = table.Column<string>(nullable: true),
                    FatherMEnglish = table.Column<string>(nullable: true),
                    FatherLNepali = table.Column<string>(nullable: true),
                    FatherLEnglish = table.Column<string>(nullable: true),
                    FatherDistrict = table.Column<string>(nullable: true),
                    Fathervdcmu = table.Column<string>(nullable: true),
                    Fatherward = table.Column<string>(nullable: true),
                    Fatherctznum = table.Column<string>(nullable: true),
                    Fatherctzdistrict = table.Column<string>(nullable: true),
                    Fatherctzdate = table.Column<string>(nullable: true),
                    MotherFNepali = table.Column<string>(nullable: true),
                    MotherFEnglish = table.Column<string>(nullable: true),
                    MotherMNepali = table.Column<string>(nullable: true),
                    MotherMEnglish = table.Column<string>(nullable: true),
                    MotherLNepali = table.Column<string>(nullable: true),
                    MotherLEnglish = table.Column<string>(nullable: true),
                    MotherDistrict = table.Column<string>(nullable: true),
                    Mothervdcmu = table.Column<string>(nullable: true),
                    Motherward = table.Column<string>(nullable: true),
                    Motherctznum = table.Column<string>(nullable: true),
                    Motherctzdistrict = table.Column<string>(nullable: true),
                    Motherctzdate = table.Column<string>(nullable: true),
                    WNameFEnglish = table.Column<string>(nullable: true),
                    WNameMEnglish = table.Column<string>(nullable: true),
                    WNameSEnglish = table.Column<string>(nullable: true),
                    WNameFNepali = table.Column<string>(nullable: true),
                    WNameMNepali = table.Column<string>(nullable: true),
                    WNameSNepali = table.Column<string>(nullable: true),
                    ApplicantFNepali = table.Column<string>(nullable: true),
                    ApplicantMNepali = table.Column<string>(nullable: true),
                    ApplicantLNepali = table.Column<string>(nullable: true),
                    ApplicantFEnglish = table.Column<string>(nullable: true),
                    ApplicantMEnglish = table.Column<string>(nullable: true),
                    ApplicantLEnglish = table.Column<string>(nullable: true),
                    AppRelation = table.Column<string>(nullable: true),
                    ApplicantDistrict = table.Column<string>(nullable: true),
                    Applicantvdcmu = table.Column<string>(nullable: true),
                    Applicantward = table.Column<string>(nullable: true),
                    Applicantctznum = table.Column<string>(nullable: true),
                    Applicantctzdistrict = table.Column<string>(nullable: true),
                    Applicantctzdate = table.Column<string>(nullable: true),
                    Formdate = table.Column<string>(nullable: true),
                    PhoneNo = table.Column<string>(nullable: true),
                    remark = table.Column<string>(nullable: true),
                    RFNameNepali = table.Column<string>(nullable: false),
                    RMNameNepali = table.Column<string>(nullable: true),
                    RLNameNepali = table.Column<string>(nullable: false),
                    RFNameEnglish = table.Column<string>(nullable: false),
                    RMNameEnglish = table.Column<string>(nullable: true),
                    RLNameEnglish = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeathModel", x => x.DeathId);
                });

            migrationBuilder.CreateTable(
                name: "Deaths",
                columns: table => new
                {
                    DeathId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RegistrationNumber = table.Column<string>(nullable: false),
                    RegistrationDateNepali = table.Column<string>(nullable: false),
                    RegistrationDateEnglish = table.Column<string>(nullable: false),
                    IdentityNo = table.Column<int>(nullable: false),
                    FNameNepali = table.Column<string>(nullable: true),
                    MNameNepali = table.Column<string>(nullable: true),
                    LNameNepali = table.Column<string>(nullable: true),
                    FNameEnglish = table.Column<string>(nullable: true),
                    MNameEnglish = table.Column<string>(nullable: true),
                    LNameEnglish = table.Column<string>(nullable: true),
                    Caste = table.Column<string>(nullable: true),
                    CitzNo = table.Column<string>(nullable: true),
                    NDOBBSY = table.Column<string>(nullable: true),
                    NDOBBSM = table.Column<string>(nullable: true),
                    NDOBBSD = table.Column<string>(nullable: true),
                    DVDC = table.Column<string>(nullable: true),
                    DWard = table.Column<string>(nullable: true),
                    DCtznNo = table.Column<string>(nullable: true),
                    Dctzdistrict = table.Column<string>(nullable: true),
                    DWFullNameEnglish = table.Column<string>(nullable: true),
                    DWFullNameNepali = table.Column<string>(nullable: true),
                    EDOBBSY = table.Column<string>(nullable: true),
                    EDOBBSM = table.Column<string>(nullable: true),
                    EDOBBSD = table.Column<string>(nullable: true),
                    IsVerified = table.Column<string>(nullable: true),
                    DReport = table.Column<string>(nullable: true),
                    DProvince = table.Column<string>(nullable: true),
                    DDistrict = table.Column<string>(nullable: true),
                    Gender = table.Column<string>(nullable: true),
                    DeathDate = table.Column<string>(nullable: true),
                    DeathDateReg = table.Column<string>(nullable: true),
                    DeathPlace = table.Column<string>(nullable: true),
                    DeathReason = table.Column<string>(nullable: true),
                    IsMarried = table.Column<bool>(nullable: false),
                    GFFNepali = table.Column<string>(nullable: true),
                    GFFEnglish = table.Column<string>(nullable: true),
                    GFMNepali = table.Column<string>(nullable: true),
                    GFMEnglish = table.Column<string>(nullable: true),
                    GFLNepali = table.Column<string>(nullable: true),
                    GFLEnglish = table.Column<string>(nullable: true),
                    FatherFNepali = table.Column<string>(nullable: true),
                    FatherFEnglish = table.Column<string>(nullable: true),
                    FatherMNepali = table.Column<string>(nullable: true),
                    FatherMEnglish = table.Column<string>(nullable: true),
                    FatherLNepali = table.Column<string>(nullable: true),
                    FatherLEnglish = table.Column<string>(nullable: true),
                    FatherDistrict = table.Column<string>(nullable: true),
                    Fathervdcmu = table.Column<string>(nullable: true),
                    Fatherward = table.Column<string>(nullable: true),
                    Fatherctznum = table.Column<string>(nullable: true),
                    Fatherctzdistrict = table.Column<string>(nullable: true),
                    Fatherctzdate = table.Column<string>(nullable: true),
                    MotherFNepali = table.Column<string>(nullable: true),
                    MotherFEnglish = table.Column<string>(nullable: true),
                    MotherMNepali = table.Column<string>(nullable: true),
                    MotherMEnglish = table.Column<string>(nullable: true),
                    MotherLNepali = table.Column<string>(nullable: true),
                    MotherLEnglish = table.Column<string>(nullable: true),
                    MotherDistrict = table.Column<string>(nullable: true),
                    Mothervdcmu = table.Column<string>(nullable: true),
                    Motherward = table.Column<string>(nullable: true),
                    Motherctznum = table.Column<string>(nullable: true),
                    Motherctzdistrict = table.Column<string>(nullable: true),
                    Motherctzdate = table.Column<string>(nullable: true),
                    WNameFEnglish = table.Column<string>(nullable: true),
                    WNameMEnglish = table.Column<string>(nullable: true),
                    WNameSEnglish = table.Column<string>(nullable: true),
                    WNameFNepali = table.Column<string>(nullable: true),
                    WNameMNepali = table.Column<string>(nullable: true),
                    WNameSNepali = table.Column<string>(nullable: true),
                    ApplicantFNepali = table.Column<string>(nullable: true),
                    ApplicantMNepali = table.Column<string>(nullable: true),
                    ApplicantLNepali = table.Column<string>(nullable: true),
                    ApplicantFEnglish = table.Column<string>(nullable: true),
                    ApplicantMEnglish = table.Column<string>(nullable: true),
                    ApplicantLEnglish = table.Column<string>(nullable: true),
                    AppRelation = table.Column<string>(nullable: true),
                    ApplicantDistrict = table.Column<string>(nullable: true),
                    Applicantvdcmu = table.Column<string>(nullable: true),
                    Applicantward = table.Column<string>(nullable: true),
                    Applicantctznum = table.Column<string>(nullable: true),
                    Applicantctzdistrict = table.Column<string>(nullable: true),
                    Applicantctzdate = table.Column<string>(nullable: true),
                    Formdate = table.Column<string>(nullable: true),
                    PhoneNo = table.Column<string>(nullable: true),
                    remark = table.Column<string>(nullable: true),
                    RFNameNepali = table.Column<string>(nullable: false),
                    RMNameNepali = table.Column<string>(nullable: true),
                    RLNameNepali = table.Column<string>(nullable: false),
                    RFNameEnglish = table.Column<string>(nullable: false),
                    RMNameEnglish = table.Column<string>(nullable: true),
                    RLNameEnglish = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Deaths", x => x.DeathId);
                });

            //migrationBuilder.CreateTable(
            //    name: "PollModel",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Choose = table.Column<string>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_PollModel", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Polls",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Choose = table.Column<string>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Polls", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "ProblemModel",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(nullable: false),
            //        Type = table.Column<string>(nullable: false),
            //        Address = table.Column<string>(nullable: true),
            //        ProblemDate = table.Column<DateTime>(nullable: false),
            //        Details = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ProblemModel", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Problems",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(nullable: false),
            //        Type = table.Column<string>(nullable: false),
            //        Address = table.Column<string>(nullable: true),
            //        ProblemDate = table.Column<DateTime>(nullable: false),
            //        Details = table.Column<string>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Problems", x => x.Id);
            //    });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Birth");

            migrationBuilder.DropTable(
                name: "BirthModel");

            migrationBuilder.DropTable(
                name: "ComplainModel");

            migrationBuilder.DropTable(
                name: "Complains");

            migrationBuilder.DropTable(
                name: "ContactModel");

            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.DropTable(
                name: "DeathModel");

            migrationBuilder.DropTable(
                name: "Deaths");

            migrationBuilder.DropTable(
                name: "PollModel");

            migrationBuilder.DropTable(
                name: "Polls");

            migrationBuilder.DropTable(
                name: "ProblemModel");

            migrationBuilder.DropTable(
                name: "Problems");
        }
    }
}
