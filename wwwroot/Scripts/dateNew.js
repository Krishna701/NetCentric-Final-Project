$j(document).ready(function () {
    $j(".date1").datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        onSelect: function (dateText, instance) {
            var pieces = dateText.split("/");
            var t = '#' + $j(this).attr("id");
            $j(t).parents('li:first').find('.date1:eq(0)').val(pieces[0])
            $j(t).parents('li:first').find('.date1:eq(1)').val(pieces[1])
            $j(t).parents('li:first').find('.date1:eq(2)').val(pieces[2])
            var $this1 = $j(t).parents('li:first').find('.date1:eq(0)');
            var $this2 = $j(t).parents('li:first').find('.date1:eq(1)');
            var $this3 = $j(t).parents('li:first').find('.date1:eq(2)');
            if ($this1.val() == '' || $this2.val() == '' || $this3.val() == '') {

            }
            else {

                if ($j(this).attr('copyTo')) {
                    var copyToId = $(this).attr('copyTo');
                    if (copyToId == 'YearTo') {
                        if ($('#' + copyToId).val().length == 0) {
                            $('#' + copyToId).val($(this).val());
                        }
                        if ($('#MonthTo').val().length == 0) {
                            $('#MonthTo').val($('#monthfrom').val());
                        }
                        if ($('#DayTo').val().length == 0) {
                            $('#DayTo').val($('#dayfrom').val());
                        }
                    }
                    else if (copyToId == 'MonthTo') {
                        if ($('#' + copyToId).val().length == 0) {
                            $('#' + copyToId).val($(this).val());
                        }
                        if ($('#YearTo').val().length == 0) {
                            $('#YearTo').val($('#Yearfrom').val());
                        }
                        if ($('#DayTo').val().length == 0) {
                            $('#DayTo').val($('#dayfrom').val());
                        }
                    }
                    else if (copyToId == 'DayTo') {
                        if ($('#' + copyToId).val().length == 0) {
                            $('#' + copyToId).val($(this).val());
                        }
                        if ($('#YearTo').val().length == 0) {
                            $('#YearTo').val($('#Yearfrom').val());
                        }
                        if ($('#MonthTo').val().length == 0) {
                            $('#MonthTo').val($('#monthfrom').val());
                        }
                    }
                    if (copyToId == 'Yearfrom') {
                        if ($('#' + copyToId).val().length == 0) {
                            $('#' + copyToId).val($(this).val());
                        }
                        if ($('#monthfrom').val().length == 0) {
                            $('#monthfrom').val($('#MonthTo').val());
                        }
                        if ($('#dayfrom').val().length == 0) {
                            $('#dayfrom').val($('#DayTo').val());
                        }
                    }
                    else if (copyToId == 'monthfrom') {
                        if ($('#' + copyToId).val().length == 0) {
                            $('#' + copyToId).val($(this).val());
                        }
                        if ($('#Yearfrom').val().length == 0) {
                            $('#Yearfrom').val($('#YearTo').val());
                        }
                        if ($('#dayfrom').val().length == 0) {
                            $('#dayfrom').val($('#DayTo').val());
                        }
                    }
                    else if (copyToId == 'dayfrom') {
                        if ($('#' + copyToId).val().length == 0) {
                            $('#' + copyToId).val($(this).val());
                        }
                        if ($('#Yearfrom').val().length == 0) {
                            $('#Yearfrom').val($('#YearTo').val());
                        }
                        if ($('#monthfrom').val().length == 0) {
                            $('#monthfrom').val($('#MonthTo').val());
                        }
                    }

                }

                var val1 = "";
                var val1 = "";
                var val3 = "";

                var val1 = $j(t).parents('li:first').find('.date1LOC:eq(0)');
                var val2 = $j(t).parents('li:first').find('.date1LOC:eq(1)');
                var val3 = $j(t).parents('li:first').find('.date1LOC:eq(2)');
                var url1 = '../../Home/ChangeDate?id=' + $this2.val() + "-" + $this1.val() + "-" + $this3.val();
                $j.ajax({
                    url: url1,
                    type: "POST",
                    data: null,
                    success: function (data) {
                        var nepDate = data.newNepaliDate.split('-');
                        val1.val(nepDate[0]);
                        val2.val(nepDate[1]);
                        val3.val(nepDate[2]);

                        if (copyToId == 'Yearfrom' || copyToId == 'monthfrom' || copyToId == 'dayfrom') {
                            if ($('#DobDayFrom').val().length == 0) {
                                $('#DobDayFrom').val(nepDate[2]);
                            }
                            if ($('#DobMonthFrom').val().length == 0) {
                                $('#DobMonthFrom').val(nepDate[1]);
                            }
                            if ($('#DobYearFrom').val().length == 0) {
                                $('#DobYearFrom').val(nepDate[0]);
                            }
                        }
                        else if (copyToId == 'YearTo' || copyToId == 'MonthTo' || copyToId == 'DayTo') {
                            if ($('#DobDayTo').val().length == 0) {
                                $('#DobDayTo').val(nepDate[2]);
                            }
                            if ($('#DobMonthTo').val().length == 0) {
                                $('#DobMonthTo').val(nepDate[1]);
                            }
                            if ($('#DobYearTo').val().length == 0) {
                                $('#DobYearTo').val(nepDate[0]);
                            }
                        }
                    }
                });

                var age = $j(this).attr("age");
                if (age != undefined) {
                    var url2 = '../../Home/Age?id=' + $this2.val() + "-" + $this1.val() + "-" + $this3.val();
                    $j.ajax({
                        url: url2,
                        type: "POST",
                        data: null,
                        success: function (data) {
                            var age1 = data.calAge;
                            $j("#" + age).val(age1);
                        }
                    });
                }
            }
        }
    })

    $j('.date1').keyup(function (e) {
        if (e.which != 9 && e.which != 16 && e.which != e.ctrlKey && e.which != 37 && e.which != 38 && e.which != 39 && e.which != 40) {
            if ((($j(this).attr('class').indexOf('day') != -1 || $j(this).attr('class').indexOf('month') != -1) && $j(this).val().length == 2) || (($j(this).attr('class').indexOf('year') != -1) && $j(this).val().length == 4)) {
                var inputs = $j(this).closest('form').find(':input');
                inputs.eq(inputs.index(this) + 1).focus();
                $j(this).trigger('change');
            }
        }
    });

    $j('.date1LOC').keyup(function (e) {
        if (e.which != 9 && e.which != 16 && e.which != e.ctrlKey && e.which != 37 && e.which != 38 && e.which != 39 && e.which != 40) {
            if ((($j(this).attr('class').indexOf('day') != -1 || $j(this).attr('class').indexOf('month') != -1) && $j(this).val().length == 2) || (($j(this).attr('class').indexOf('year') != -1) && $j(this).val().length == 4)) {
                var inputs = $j(this).closest('form').find(':input');
                inputs.eq(inputs.index(this) + 1).focus();
                $j(this).trigger('change');
            }
        }
    });

    $j('.date1').change(function () {
        var thisVal = $j(this).attr('id');
        var t = '#' + $j(this).attr("id");
        var eff = $j(this).attr("effDate");
        var backlog = $j('#backlogFlag').val();
        var dist = $j('#' + $j(this).attr("friend")).val();
        var $this1 = $j(t).parents('li:first').find('.date1:eq(0)');
        var $this2 = $j(t).parents('li:first').find('.date1:eq(1)');
        var $this3 = $j(t).parents('li:first').find('.date1:eq(2)');

        if ($this1.val() != '') {
            if ($this1.val().length < 2) {
                $(t).val("0" + $this1.val());

            }
        }
        if ($this2.val() != '') {
            if ($this2.val().length < 2) {
                $(t).val("0" + $this2.val());
            }
        }

        if ($this1.val() == '' || $this2.val() == '' || $this3.val() == '') {

        }
        else {

            if ($j(this).attr('copyTo')) {
                var copyToId = $(this).attr('copyTo');
            }

            var val1 = "";
            var val1 = "";
            var val3 = "";
            var val1 = $j(t).parents('li:first').find('.date1LOC:eq(0)');
            var val2 = $j(t).parents('li:first').find('.date1LOC:eq(1)');
            var val3 = $j(t).parents('li:first').find('.date1LOC:eq(2)');
            var url1 = '../../Home/ChangeDate?id=' + $this2.val() + "-" + $this1.val() + "-" + $this3.val();
            $j.ajax({
                url: url1,
                type: "POST",
                data: null,
                success: function (data) {
                    var nepDate = data.newNepaliDate.split('-');
                    val1.val(nepDate[0]);
                    val2.val(nepDate[1]);
                    val3.val(nepDate[2]);
                    if ($j('#' + thisVal).hasClass('dateCopier')) {
                        $j('#applicationYearLoc').val(nepDate[0]);
                        $j('#applicationMonthLoc').val(nepDate[1]);
                        $j('#applicationDayLoc').val(nepDate[2]);
                        $j('#applicationDay').val($j('#ssnpDay').val());
                        $j('#applicationMonth').val($j('#ssnpMonth').val());
                        $j('#applicationYear').val($j('#ssnpYear').val());
                    }
                    if (copyToId == 'Yearfrom' || copyToId == 'monthfrom' || copyToId == 'dayfrom') {
                        if ($('#DobDayFrom').val().length == 0) {
                            $('#DobDayFrom').val(nepDate[2]);
                        }
                        if ($('#DobMonthFrom').val().length == 0) {
                            $('#DobMonthFrom').val(nepDate[1]);
                        }
                        if ($('#DobYearFrom').val().length == 0) {
                            $('#DobYearFrom').val(nepDate[0]);
                        }
                    }
                    else if (copyToId == 'YearTo' || copyToId == 'MonthTo' || copyToId == 'DayTo') {
                        if ($('#DobDayTo').val().length == 0) {
                            $('#DobDayTo').val(nepDate[2]);
                        }
                        if ($('#DobMonthTo').val().length == 0) {
                            $('#DobMonthTo').val(nepDate[1]);
                        }
                        if ($('#DobYearTo').val().length == 0) {
                            $('#DobYearTo').val(nepDate[0]);
                        }
                    }
                    if (eff != '' && backlog != 'backlog') {
                        var url3 = '../../Common/CheckEffectiveDate?districtCD=' + dist + '&effectiveDate=' + $this1.val() + "-" + $this2.val() + "-" + $this3.val();
                        $j.ajax({
                            url: url3,
                            type: "POST",
                            data: null,
                            success: function (data) {
                                if (data != null && data.toString() != '') {
                                    if (data.toString() == 'N') {
                                        alert(eff + ' Date is not valid to be registered according to VITAL Act!!');
                                        $this1.val('');
                                        $this2.val('');
                                        $this3.val('');
                                        val1.val('');
                                        val2.val('');
                                        val3.val('');
                                        //                                                                                return false;
                                    }
                                }
                            }
                        });
                    }

                }
            });

            var age = $j(this).attr("age");
            if (age != undefined) {
                var url2 = '../../Home/Age?id=' + $this2.val() + "-" + $this1.val() + "-" + $this3.val();
                $j.ajax({
                    url: url2,
                    type: "POST",
                    data: null,
                    success: function (data) {
                        var age1 = data.calAge;
                        $j("#" + age).val(age1);
                    }
                });
            }
        }
    });

    $j('.date1LOC').change(function () {
        var thisVal = $j(this).attr('id');
        var eff = $j(this).attr("effDate");
        var backlog = $j('#backlogFlag').val();
        var age = $j(this).attr("age");
        var dist = $j('#' + $j(this).attr("friend")).val();
        var $this1 = $j(this).parents('li:first').find('.date1LOC:eq(0)');
        var $this2 = $j(this).parents('li:first').find('.date1LOC:eq(1)');
        var $this3 = $j(this).parents('li:first').find('.date1LOC:eq(2)');
        var t = '#' + $j(this).attr("id");
        if ($this2.val() != '') {
            if ($this2.val().length < 2) {
                $(t).val("0" + $this2.val());

            }
        }
        if ($this3.val() != '') {
            if ($this3.val().length < 2) {
                $(t).val("0" + $this3.val());
            }
        }

        if ($this1.val() == '' || $this2.val() == '' || $this3.val() == '') {

        }
        else {

            if ($j(this).attr('copyTo')) {
                var copyToId = $(this).attr('copyTo');

            }
            var val1 = $j(t).parents('li:first').find('.date1:eq(0)');
            var val2 = $j(t).parents('li:first').find('.date1:eq(1)');
            var val3 = $j(t).parents('li:first').find('.date1:eq(2)');
            var url1 = '../../Home/ChangeDateToEnglish?id=' + $this1.val() + "-" + $this2.val() + "-" + $this3.val();
            var engYear = "";
            var engMonth = "";
            var engDay = "";
            $j.ajax({
                url: url1,
                type: "POST",
                data: null,
                success: function (data) {
                    var nepDate = data.newEnglishDate.split('-');
                    if (nepDate[2] == null || nepDate[1] == null || nepDate[0] == null) {
                        alert('invalid nepali date');
                        $this1.focus();
                        $this1.attr('style', 'border:red 2px solid');
                    }
                    else {
                        $this1.attr('style', '');
                    }

                    engYear = nepDate[2];
                    val3.val(nepDate[2]);
                    val1.val(nepDate[0]);
                    engDay = nepDate[0];
                    engMonth = ConvertMonth(nepDate[1]);
                    if ($j('#' + thisVal).hasClass('dateCopier')) {
                        $j('#applicationYear').val(nepDate[2]);
                        $j('#applicationDay').val(nepDate[0]);
                        $j('#applicationYearLoc').val($j('#ssnpYearLoc').val());
                        $j('#applicationDayLoc').val($j('#ssnpDayLoc').val());
                    }
                    var url2 = '../../Home/ConvertMonth?id=' + nepDate[1];
                    $j.ajax({
                        url: url2,
                        type: "POST",
                        data: null,
                        success: function (data) {
                            val2.val(data.convertedMonth);
                            if ($j('#' + thisVal).hasClass('dateCopier')) {
                                $j('#applicationMonth').val(data.convertedMonth);
                                $j('#applicationMonthLoc').val($j('#ssnpMonthLoc').val());
                            }
                            if (copyToId == 'DobYearFrom' || copyToId == 'DobMonthFrom' || copyToId == 'DobDayFrom') {
                                if ($('#dayfrom').val().length == 0) {
                                    $('#dayfrom').val(val1.val());
                                    if ($(this).attr('class').indexOf('dateCopier') != -1) {
                                        $('#dayfrom').val(val1.val());
                                    }
                                }
                                if ($('#monthfrom').val().length == 0) {
                                    $('#monthfrom').val($('#MonthTo').val());
                                }
                                if ($('#Yearfrom').val().length == 0) {
                                    $('#Yearfrom').val(val3.val());
                                }
                            }
                            else if (copyToId == 'DobYearTo' || copyToId == 'DobMonthTo' || copyToId == 'DobDayTo') {
                                if ($('#DayTo').val().length == 0) {
                                    $('#DayTo').val(val1.val());
                                }
                                if ($('#MonthTo').val().length == 0) {
                                    $('#MonthTo').val($('#monthfrom').val());
                                }
                                if ($('#YearTo').val().length == 0) {
                                    $('#YearTo').val(val3.val());
                                }
                            }
                            if (eff != '' && backlog != 'backlog') {
                                var url3 = '../../Common/CheckEffectiveDate?districtCD=' + dist + '&effectiveDate=' + val1.val() + "-" + val2.val() + "-" + val3.val();
                                $j.ajax({
                                    url: url3,
                                    type: "POST",
                                    data: null,
                                    success: function (data) {
                                        if (data != null && data.toString() != '') {
                                            if (data.toString() == 'N') {
                                                alert(eff + ' Date is not valid to be registered according to VITAL Act!!');
                                                val1.val('');
                                                val2.val('');
                                                val3.val('');
                                                $this1.val('');
                                                $this2.val('');
                                                $this3.val('');
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    });
                  
                    if (age != undefined) {
                        var engdate = engMonth + "-" + engDay + "-" + engYear;
                        var url3 = '../../Home/Age?id=' + engdate;
                        $j.ajax({
                            url: url3,
                            type: "POST",
                            data: null,
                            success: function (data) {
                                var age1 = data.calAge;
                                $j("#" + age).val(age1);
                            }
                        });
                    }

                }
            });
            if ($j(this).attr('jumpTo') != undefined) {
                $j('#' + $j(this).attr('jumpTo')).focus();
                $j('#ui-datepicker-div').hide();
            }

        }
    });


});

function ConvertMonth(id) {
    var ConvertedMonth = "";
    if (id == "January") {
        ConvertedMonth = "01";
    }
    else if (id == "February") {
        ConvertedMonth = "02";
    }
    else if (id == "March") {
        ConvertedMonth = "03";
    }
    else if (id == "April") {
        ConvertedMonth = "04";
    }
    else if (id == "May") {
        ConvertedMonth = "05";
    }
    else if (id == "June") {
        ConvertedMonth = "06";
    }
    else if (id == "July") {
        ConvertedMonth = "07";
    }
    else if (id == "August") {
        ConvertedMonth = "08";
    }
    else if (id == "September") {
        ConvertedMonth = "09";
    }
    else if (id == "October") {
        ConvertedMonth = "10";
    }
    else if (id == "November") {
        ConvertedMonth = "11";
    }
    else if (id == "December") {
        ConvertedMonth = "12";
    }
    return ConvertedMonth;

}