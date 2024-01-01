using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace CommercePromote.CreditClient
{
    public class LookupConfig
    {
        public enum FaqType
        {
            Internal = 1,
            Web = 2,
            [EnumMember(Value = "Web & Internal")]
            WebInternal = 3
        }
    }
}