$(document).ready(function ()
{
    /*----------------------------
    Class Note List checkbox select all
    -----------------------------*/
    $("#note-all").click(function ()
    {
        $(".note").prop("checked", $("#note-all").prop("checked"))
    });

    /*----------------------------
    Student List checkbox select all
    -----------------------------*/
    $("#check_all").click(function ()
    {
        $(".student").prop("checked", $("#check_all").prop("checked"))
    });

    /*----------------------------
    Add note to note table
    -----------------------------*/
    $("#btnAddNote").click(function ()
    {
        var note = "";
        if("#class_note_text".length > 0)
        {
            
        }

    });
});