<script language="javascript" type="text/javascript">
    function getPassword()
    {
        var pwd = prompt('Please enter your password:', '');
        
        if(pwd != null)
        {
            if(pwd != '')
            {
                document.getElementById('hidPassword').value = pwd;
                return true;
            }
        }
        
        return false;
    }
    </script>