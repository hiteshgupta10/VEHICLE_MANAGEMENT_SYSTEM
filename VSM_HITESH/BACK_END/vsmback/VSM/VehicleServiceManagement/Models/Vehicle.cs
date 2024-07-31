using System;
using System.Collections.Generic;

namespace VehicleServiceManagement.Models;

public partial class Vehicle
{
    public int VehicleId { get; set; }

    public int CustomerId { get; set; }

    public string Make { get; set; } = null!;

    public string Model { get; set; } = null!;

    public int Year { get; set; }

    public string Vin { get; set; } = null!;

    public virtual Customer Customer { get; set; } = null!;

    public virtual ICollection<ServiceRecord> ServiceRecords { get; set; } = new List<ServiceRecord>();
}
