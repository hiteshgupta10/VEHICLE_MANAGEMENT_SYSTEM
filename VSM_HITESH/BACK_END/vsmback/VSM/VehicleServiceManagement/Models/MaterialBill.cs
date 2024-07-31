using System;
using System.Collections.Generic;

namespace VehicleServiceManagement.Models;

public partial class MaterialBill
{
    public int BillId { get; set; }

    public int SrId { get; set; }

    public string Item { get; set; } = null!;

    public decimal Cost { get; set; }

    public int Units { get; set; }

    public virtual ServiceRecord Sr { get; set; } = null!;
}
