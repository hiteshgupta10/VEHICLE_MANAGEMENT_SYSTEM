using System;
using System.Collections.Generic;

namespace VehicleServiceManagement.Models;

public partial class ServiceRecord
{
    public int SrId { get; set; }

    public int VehicleId { get; set; }

    public int Id { get; set; }

    public DateTime DateOfService { get; set; }

    public string? ServiceDesc { get; set; }

    public decimal ServiceCost { get; set; }

    public string Status { get; set; } = null!;

    public virtual ICollection<MaterialBill> MaterialBills { get; set; } = new List<MaterialBill>();

    public virtual User User { get; set; } = null!;

    public virtual Vehicle Vehicle { get; set; } = null!;
};
