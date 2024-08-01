using System;
using System.Collections.Generic;

namespace VehicleServiceManagement.Models;
public class User
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string MobileNumber { get; set; } = string.Empty;
    public DateTime CreatedOn { get; set; }
    public UserType UserType { get; set; } = UserType.NONE;
    public AccountStatus AccountStatus { get; set; } = AccountStatus.UNAPROOVED;
    public virtual ICollection<ServiceRecord> ServiceRecords { get; set; } = new List<ServiceRecord>();
}

public enum UserType
{
    NONE, ADMIN, SERVICE_ADVISER
}

public enum AccountStatus
{
    UNAPROOVED, ACTIVE, BLOCKED
}
//public partial class User
//{
//    public int UserId { get; set; }

//    public string FirstName { get; set; } = null!;

//    public string LastName { get; set; } = null!;

//    public string UserName { get; set; } = null!;

//    public string Password { get; set; } = null!;

//    public int RoleId { get; set; }

//    public virtual Role? Role { get; set; }

//    public AccountStatus AccountStatus { get; set; } = AccountStatus.UNAPROOVED;
//    public virtual ICollection<ServiceRecord> ServiceRecords { get; set; } = new List<ServiceRecord>();
//}
//public enum AccountStatus
//{
//    UNAPROOVED, ACTIVE, BLOCKED
//}
